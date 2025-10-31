import React, { useState } from "react";

export default function ArticleForm({ formData, setFormData }) {
  const [uploadStatus, setUploadStatus] = useState("");

  const handleImageUpload = () => {
    if (!formData.imageFile) {
      setUploadStatus("Please select an image first.");
      return;
    }

    setUploadStatus("Uploading to local storage (simulated Firebase)...");
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target.result;

      // Simulate Firebase upload by storing locally
      const uploadedImages = JSON.parse(
        localStorage.getItem("uploadedImages") || "[]"
      );
      const imageId = Date.now().toString();
      uploadedImages.push({
        id: imageId,
        data: base64,
        filename: formData.imageFile.name,
        uploadedAt: new Date().toISOString(),
      });
      localStorage.setItem("uploadedImages", JSON.stringify(uploadedImages));

      // Fix: also set imageUrl so PostButton can save it to Firestore
      setFormData({
        ...formData,
        imageData: base64,
        imageUrl: base64,
        imageId,
      });

      setUploadStatus("✅ Image uploaded successfully (local simulation)!");
    };
    reader.onerror = () => {
      setUploadStatus("❌ Error uploading image.");
    };
    reader.readAsDataURL(formData.imageFile);
  };

  return (
    <div className="form-section">
      <label>Title</label>
      <input
        type="text"
        placeholder="Enter a descriptive title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <label>Add Image</label>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setFormData({ ...formData, imageFile: e.target.files[0] });
            setUploadStatus("");
          }}
        />
        <button
          type="button"
          className="post-btn"
          style={{ background: "#c0c0c0" }}
          onClick={handleImageUpload}
        >
          Upload
        </button>
      </div>

      {uploadStatus && (
        <div
          style={{
            marginTop: "5px",
            fontSize: "14px",
            color: uploadStatus.includes("Error") ? "red" : "green",
          }}
        >
          {uploadStatus}
        </div>
      )}

      {formData.imageUrl && (
        <img
          src={formData.imageUrl}
          alt="Uploaded"
          style={{ width: "200px", marginTop: "10px", borderRadius: "8px" }}
        />
      )}

      <label>Abstract</label>
      <input
        type="text"
        placeholder="Enter a 1-paragraph abstract"
        value={formData.abstract || ""}
        onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
      />

      <label>Article Text</label>
      <textarea
        placeholder="Enter your article content"
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
