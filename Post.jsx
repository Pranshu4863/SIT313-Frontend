import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./Post.css";

const dummyArticles = [
  {
    id: 1,
    title: "First Article",
    author: "Author One",
    content: "This is the first article content.",
  },
  {
    id: 2,
    title: "Second Article",
    author: "Author Two",
    content: "This is the second article content.",
  },
];

function Post() {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (!currentUser) {

      } else {

        setArticles(dummyArticles);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleCommentChange = (articleId, value) => {
    setComments({ ...comments, [articleId]: value });
  };

  const handleLike = (articleId) => {
    if (!user) return;
    const userLikes = likes[articleId] || {};
    if (userLikes[user.uid]) {

      const updatedUserLikes = { ...userLikes };
      delete updatedUserLikes[user.uid];
      setLikes({ ...likes, [articleId]: updatedUserLikes });
    } else {

      setLikes({
        ...likes,
        [articleId]: { ...userLikes, [user.uid]: true },
      });
    }
  };

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="post-container">
      <h2>Articles</h2>
      {articles.map((article) => {
        const userLikes = likes[article.id] || {};
        const likeCount = Object.keys(userLikes).length;
        const userHasLiked = !!userLikes[user.uid];
        return (
          <div key={article.id} className="article">
            <h3>{article.title}</h3>
            <p>
              <em>By {article.author}</em>
            </p>
            <p>{article.content}</p>
            <div>
              <FaHeart
                className={`like-icon ${userHasLiked ? "liked" : ""}`}
                onClick={() => handleLike(article.id)}
              />
              <span> {likeCount}</span>
            </div>
            <div>
              <textarea
                placeholder="Add a comment"
                value={comments[article.id] || ""}
                onChange={(e) => handleCommentChange(article.id, e.target.value)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
