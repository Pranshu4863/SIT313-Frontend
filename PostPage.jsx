import React, { useState } from "react";
import PostTypeSelector from "./PostTypeSelector";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import PostButton from "./PostButton";

export default function PostPage() {
  const [postType, setPostType] = useState("question");
  const [formData, setFormData] = useState({ title: "", content: "", tags: "" });

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
