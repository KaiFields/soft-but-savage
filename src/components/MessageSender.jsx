
import React, { useState } from 'react';
import './MessageSender.css';

const MessageSender = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add post to the database

    setInput('');
    setImageUrl('');
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <img
          className="user__avatar"
          src="https://avatars.githubusercontent.com/u/1234567?v=4"
          alt="User avatar"
        />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={"What's on your mind?"}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={"image URL (Optional)"}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <span style={{ color: 'red' }} className="material-icons">
            videocam
          </span>
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <span style={{ color: 'green' }} className="material-icons">
            photo_library
          </span>
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <span style={{ color: 'orange' }} className="material-icons">
            insert_emoticon
          </span>
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
