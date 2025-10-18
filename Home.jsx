import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import "./Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Generate fake posts
    const generatePosts = () => {
      const fakePosts = [];
      for (let i = 0; i < 10; i++) {
        fakePosts.push({
          id: i + 1,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(2),
          author: faker.person.fullName(),
          avatar: faker.image.avatar(),
          date: faker.date.recent().toLocaleDateString(),
          likes: faker.number.int({ min: 0, max: 100 }),
          comments: faker.number.int({ min: 0, max: 20 }),
        });
      }
      setPosts(fakePosts);
    };

    generatePosts();
  }, []);

  return (
    <div className="home-container">
      <div className="feed">
        <h1>DEV@Deakin Feed</h1>
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.avatar} alt={post.author} className="avatar" />
              <div className="post-info">
                <h3>{post.author}</h3>
                <span className="date">{post.date}</span>
              </div>
            </div>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <div className="post-footer">
              <span className="likes">❤️ {post.likes} likes</span>
              <span className="comments">💬 {post.comments} comments</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
