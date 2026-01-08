
import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import db from "./firebase";
import Chat from './components/Chat';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [comment, setComment] = useState({});

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  function handleAddPost(e) {
    e.preventDefault();
    if (!newPost) return;

    db.collection("posts").add({
      content: newPost,
      author: "you",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      comments: []
    });

    setNewPost('');
  }

  function handleAddComment(postId, e) {
    e.preventDefault();
    if (!comment[postId]) return;

    db.collection("posts").doc(postId).update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        text: comment[postId],
        author: "you"
      })
    });

    setComment({ ...comment, [postId]: '' });
  }

  return (
    <section className="community">
      <h2>Community</h2>
      <form onSubmit={handleAddPost} className="community-form">
        <textarea
          value={newPost}
          onChange={e => setNewPost(e.target.value)}
          placeholder="Share a journal entry, ritual, or encouragement..."
          required
        />
        <button type="submit">Post</button>
      </form>
      <ul className="community-posts">
        {posts.map(post => (
          <li key={post.id} className="community-post">
            <div><b>@{post.data.author}</b>: {post.data.content}</div>
            <ul className="comments">
              {post.data.comments && post.data.comments.map((c, index) => (
                <li key={index}><b>@{c.author}</b>: {c.text}</li>
              ))}
            </ul>
            <form onSubmit={e => handleAddComment(post.id, e)} className="comment-form">
              <input
                value={comment[post.id] || ''}
                onChange={e => setComment({ ...comment, [post.id]: e.target.value })}
                placeholder="Add a comment..."
              />
              <button type="submit">Comment</button>
            </form>
          </li>
        ))}
      </ul>
      <Chat />
    </section>
  );
}
