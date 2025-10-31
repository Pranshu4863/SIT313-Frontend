import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function FindQuestion() {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  // Fetch all questions from Firestore
  const fetchQuestions = async () => {
    try {
      const snap = await getDocs(collection(db, "posts"));
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setQuestions(data.filter((q) => q.postType === "question"));
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Delete question
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "posts", id));
      setQuestions((prev) => prev.filter((q) => q.id !== id));
      alert("Question deleted successfully!");
    } catch (err) {
      console.error("Error deleting question:", err);
    }
  };

  // Filter by title, tag, or date
  const filtered = questions.filter(
    (q) =>
      q.title?.toLowerCase().includes(filter.toLowerCase()) ||
      q.tags?.toLowerCase().includes(filter.toLowerCase()) ||
      (q.createdAt && q.createdAt.toDate().toLocaleDateString().includes(filter))
  );

  return (
    <div className="find-question">
      <h3 className="post-header">Find Question</h3>

      <input
        type="text"
        className="filter-input"
        placeholder="Filter by title, tag, or date"
        onChange={(e) => setFilter(e.target.value)}
      />

      <div className="question-list">
        {filtered.map((q) => (
          <div
            key={q.id}
            className="question-card"
            onClick={() =>
              setExpandedId(expandedId === q.id ? null : q.id)
            }
          >
            <h4>{q.title}</h4>
            <p style={{ fontSize: "13px", color: "#333" }}>{q.tags}</p>
            <small>
              {q.createdAt
                ? q.createdAt.toDate().toLocaleString()
                : "No date"}
            </small>

            {expandedId === q.id && (
              <div className="expanded">
                <p>{q.content}</p>
                <button
                  className="post-btn"
                  style={{ background: "#c0c0c0", marginTop: "10px" }}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent collapsing
                    handleDelete(q.id);
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No questions found.
          </p>
        )}
      </div>
    </div>
  );
}
