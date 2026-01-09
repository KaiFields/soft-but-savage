import './Story.css';

const Story = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <img className="story__avatar" src={profileSrc} alt="" />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
