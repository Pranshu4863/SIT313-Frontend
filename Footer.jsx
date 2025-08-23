import React from "react";
import "./App.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Column 1 */}
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Questions</a></li>
            <li><a href="#featured-articles">Articles</a></li>
            <li><a href="#featured-tutorials">Tutorials</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4>Stay connected</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>DEV@Deakin 2022</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms</a> |{" "}
          <a href="#">Code of Conduct</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
