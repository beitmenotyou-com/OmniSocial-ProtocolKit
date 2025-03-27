import React, { useEffect, useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>🌐 OmniSocial Dashboard</h1>
      <ul>
        {posts.map((p, i) => (
          <li key={i}>{p.content}</li>
        ))}
      </ul>
    </div>
  );
}
