import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { useNavigate, Link, useLocation } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./Signup.css";

function Signup() {
  const location = useLocation();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: location.state?.email || "",
    password: location.state?.password || "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(form.password, salt);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        passwordHash: hashedPassword,
      });
      setSuccessMessage("Account created successfully! Please login.");
      setTimeout(() => {
        navigate("/", {
          state: { email: form.email, password: form.password },
        });
      }, 2000);
    } catch (err) {
      console.error("Signup error:", err);
      if (err.code === "auth/email-already-in-use") {
        setError("Email already in use. Try logging in instead.");
      } else if (err.code === "auth/weak-password") {
        setError("Password is too weak. Please choose a stronger password.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email address.");
      } else {
        setError("Signup failed. Try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form onSubmit={handleSignup}>
        <input
          name="firstName"
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
