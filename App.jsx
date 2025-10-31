import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostPage from "./PostPage";
import FindQuestion from "./FindQuestion";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">New Post</Link>
        <Link to="/find">Find Question</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/find" element={<FindQuestion />} />
      </Routes>
    </Router>
  );
}
