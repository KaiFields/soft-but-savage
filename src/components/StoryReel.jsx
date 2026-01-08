
import React, { useState, useEffect } from 'react';
import Story from './Story';
import './StoryReel.css';
import db from '../firebase';

const StoryReel = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    db.collection("stories")
      .onSnapshot((snapshot) =>
        setStories(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="storyReel">
      {stories.map(story => (
        <Story
          key={story.id}
          image={story.data.image}
          profileSrc={story.data.profileSrc}
          title={story.data.title}
        />
      ))}
    </div>
  );
};

export default StoryReel;
