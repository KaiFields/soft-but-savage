
import React, { useState } from 'react';
import './MessageSender.css';
import { Camera, CameraResultType } from '@capacitor/camera';

const MessageSender = () => {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add post to the database

    setInput('');
    setImageUrl('');
  };

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be used as an image src.
    // However, it's temporary and will be revoked after the app is closed.
    // To fix this, we need to read the file and convert it to a base64 string.
    const response = await fetch(image.webPath);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(blob);
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

      {imageUrl && <img src={imageUrl} alt="Taken photo" />}

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

        <div className="messageSender__option" onClick={takePicture}>
          <span style={{ color: 'blue' }} className="material-icons">
            photo_camera
          </span>
          <h3>Camera</h3>
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
