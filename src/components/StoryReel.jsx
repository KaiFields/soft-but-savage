
import React from 'react';
import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://avatars.githubusercontent.com/u/1234567?v=4"
        title="Guest"
      />
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/men/1.jpg"
        title="John Doe"
      />
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/women/1.jpg"
        title="Jane Doe"
      />
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/men/2.jpg"
        title="Peter Jones"
      />
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        profileSrc="https://randomuser.me/api/portraits/women/2.jpg"
        title="Mary Smith"
      />
    </div>
  );
};

export default StoryReel;
