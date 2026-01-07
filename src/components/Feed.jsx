
import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic="https://avatars.githubusercontent.com/u/1234567?v=4"
        message="This is a test post"
        timestamp="2024-07-22T12:00:00Z"
        username="Guest"
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <Post
        profilePic="https://randomuser.me/api/portraits/men/1.jpg"
        message="Another test post"
        timestamp="2024-07-22T12:00:00Z"
        username="John Doe"
      />
    </div>
  );
};

export default Feed;
