import React, { useState } from "react";
import PostTypeSelector from "./PostTypeSelector";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import PostButton from "./PostButton";
import './App.css';

function App() {
  const [formData, setFormData] = useState({ 
    title: "", 
    abstract: "", 
    content: "", 
    tags: "" 
  });
  const [postType, setPostType] = useState("question");

  return (
    <div className="post-box">
      <h3 className="post-header">New Post</h3>

      <PostTypeSelector postType={postType} setPostType={setPostType} />

      {postType === "question" ? (
        <QuestionForm formData={formData} setFormData={setFormData} />
      ) : (
        <ArticleForm formData={formData} setFormData={setFormData} />
      )}

      <PostButton formData={formData} postType={postType} />
    </div>
  );
}

export default App;
