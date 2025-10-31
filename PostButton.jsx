import React from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function PostButton({ formData, postType }) {
  const handlePost = async () => {
    try {
      if (!formData.title || !formData.content) {
        alert("Please fill in the title and content before posting.");
        return;
      }

      // For articles, require image upload before posting
      if (postType === "article" && !formData.imageUrl) {
        alert("Please upload an image before posting your article.");
        return;
      }

      // Prepare post data for Firestore
      const postData = {
        title: formData.title,
        content: formData.content,
        tags: formData.tags || "",
        abstract: formData.abstract || "",
        imageUrl: formData.imageUrl || "",
        postType,
        createdAt: serverTimestamp(),
      };

      // Add to Firestore collection
      await addDoc(collection(db, "posts"), postData);

      alert(`${postType} posted successfully!`);

      // Clear form data
      formData.title = "";
      formData.content = "";
      formData.tags = "";
      formData.abstract = "";
      formData.imageUrl = "";
      formData.imageFile = null;
    } catch (error) {
      console.error("Post error:", error);
      alert("Error posting. Check console for details.");
    }
  };

  return (
    <div className="post-btn-container">
      <button className="post-btn" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}
