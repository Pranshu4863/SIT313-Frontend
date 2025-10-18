import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handlePostClick = () => {
    if (user) {
      navigate("/post");
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    navigate("/signout");
  };

  const handleHomeClick = () => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h3 onClick={handleHomeClick} style={{ cursor: "pointer" }}>
          DEV@Deakin
        </h3>
        <input type="text" placeholder="Search..." className="navbar-search" />
      </div>
      <div className="navbar-right">
        {user && (
          <button onClick={handleHomeClick} className="navbar-link-button">
            Home
          </button>
        )}
        <button onClick={handlePostClick} className="navbar-link-button">
          Post
        </button>
        <button
          onClick={() => navigate("/pricing")}
          className="navbar-link-button"
        >
          Plans
        </button>
        {user ? (
          <button onClick={handleLogout} className="navbar-link-button">
            Logout
          </button>
        ) : (
          <Link to="/" className="navbar-link">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
