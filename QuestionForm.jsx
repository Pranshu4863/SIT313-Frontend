import React from "react";

export default function QuestionForm({ formData, setFormData }) {
  return (
    <div className="form-section">
      <label>Title</label>
      <input
        type="text"
        placeholder="Start your question with how, what, why, etc."
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <label>Describe your problem</label>
      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />

      <label>Tags</label>
      <input
        type="text"
        placeholder="Please add up to 3 tags..."
        value={formData.tags}
        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
      />
    </div>
  );
}
