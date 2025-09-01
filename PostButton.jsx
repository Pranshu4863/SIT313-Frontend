import React from "react";

export default function PostButton({ formData, postType }) {
  const handlePost = () => {
    console.log("Post Type:", postType);
    console.log("Post Data:", formData);
    alert(`Your ${postType} has been "posted" (not saved to DB yet).`);
  };

  return (
    <button
      onClick={handlePost}
      style={{
        backgroundColor: "#2196f3",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      Post
    </button>
  );
}
