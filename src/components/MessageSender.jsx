
import React, { useState } from 'react';
import './MessageSender.css';
import { Camera, CameraResultType } from '@capacitor/camera';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useStateValue } from '../StateProvider';

const MessageSender = () => {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) return;

    addDoc(collection(db, 'posts'),{
      message: input,
      timestamp: serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput('');
    setImageUrl('');
  };

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });

    setImageUrl(image.dataUrl);
  };
  
    return (
    <div className="messageSender">
      <div className="messageSender__top">
        <img className="user__avatar" src={user.photoURL} alt={user.displayName} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What\'s on your mind, ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={'image URL (Optional)'}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      {imageUrl && <img src={imageUrl} alt="Taken" />}

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
