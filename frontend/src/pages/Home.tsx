import React from 'react';
import './Home.css'; // Import the CSS file for styling
import image from '../images/photo.jpeg'; // Correct the relative import path

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="profile">
        <img 
          src={image} 
          alt="Subash Neupane" 
          className="profile-pic" 
        />
        <p className="name">Subash Neupane</p>
      </div>
      <div className="bio">
        <p>
          Hello! I am Subash Neupane, a Computer Science major at Claflin University. 
          I am passionate about technology and software development, focusing on building 
          innovative solutions that make a difference. I enjoy learning new skills and 
          participating in projects that push my boundaries.
        </p>
      </div>
    </div>
  );
};

export default Home;
