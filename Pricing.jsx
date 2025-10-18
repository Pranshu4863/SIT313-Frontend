import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  const navigate = useNavigate();

  const handlePremiumClick = () => {
    navigate("/payment");
  };

  return (
    <div className="pricing-container">
      <h1>Choose Your Plan</h1>
      <div className="plans">
        <div className="plan free-plan">
          <h2>Free Plan</h2>
          <p>$0/month</p>
          <ul>
            <li>Basic features</li>
            <li>Limited posts</li>
            <li>Community support</li>
          </ul>
          <button className="plan-button">Current Plan</button>
        </div>
        <div className="plan premium-plan">
          <h2>Premium Plan</h2>
          <p>$9.99/month</p>
          <ul>
            <li>Customization features (messages, banners, themes)</li>
            <li>Content controls</li>
            <li>Analytics dashboard</li>
            <li>Priority support</li>
          </ul>
          <button className="plan-button" onClick={handlePremiumClick}>
            Choose Premium
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
