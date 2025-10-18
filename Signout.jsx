import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import "./Signout.css";

function Signout() {
  const navigate = useNavigate();

  useEffect(() => {
    const performSignout = async () => {
      try {
        await signOut(auth);
        // Redirect to login after a short delay to show the message
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Error signing out:", error);
        navigate("/");
      }
    };

    performSignout();
  }, [navigate]);

  return (
    <div className="signout-container">
      <h2>You have been signed out successfully.</h2>
      <p>Redirecting to login page...</p>
    </div>
  );
}

export default Signout;
