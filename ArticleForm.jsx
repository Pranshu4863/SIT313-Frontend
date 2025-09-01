import React from "react";

export default function ArticleForm({ formData, setFormData }) {
  return (
    <div className="form-section">
      <label>Title</label>
      <input
        type="text"
        placeholder="Enter a descriptive title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <label>Abstract</label>
      <input
        type="text"
        placeholder="Enter a 1-paragraph abstract"
        value={formData.abstract}
        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
      />

      <label>Article Text</label>
      <textarea
        placeholder="Write your article content here"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
        value={formData.tags}
        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
      />
    </div>
  );
}
