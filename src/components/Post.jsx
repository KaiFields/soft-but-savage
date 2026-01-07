
import React from 'react';
import './Post.css';

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <img src={profilePic} className="user__avatar" alt="" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <span className="material-icons">thumb_up</span>
          <p>Like</p>
        </div>
        <div className="post__option">
          <span className="material-icons">chat_bubble_outline</span>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <span className="material-icons">near_me</span>
          <p>Share</p>
        </div>
        <div className="post__option">
          <span className="material-icons">account_circle</span>
          <span className="material-icons">expand_more</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
