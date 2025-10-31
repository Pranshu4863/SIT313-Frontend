import React from "react";
export default function PostTypeSelector({ postType, setPostType }) {
  return (
    <div className="post-type">
      <label>
        <input
          type="radio"
          checked={postType === "question"}
          onChange={() => setPostType("question")}
        />{" "}
        Question
      </label>
      <label>
        <input
          type="radio"
          checked={postType === "article"}
          onChange={() => setPostType("article")}
        />{" "}
        Article
      </label>
    </div>
  );
}
