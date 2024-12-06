
import React from 'react';
import './About.css'; // Import the CSS file for styling

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm Subash Neupane, a Computer Science major at Claflin University.
        I have a strong passion for technology, software development, and problem-solving.
        I enjoy working on projects that challenge my skills and push me to think outside the box.
      </p>
      <h2>Interests and Hobbies</h2>
      <ul>
        <li>Software Development: I'm constantly learning new programming languages and frameworks.</li>
        <li>Technology Trends: I stay updated with the latest advancements in tech.</li>
        <li>Sports: I love playing soccer, which teaches me teamwork and perseverance.</li>
        <li>Travel: Exploring new places and experiencing different cultures is one of my passions.</li>
      </ul>
      <h2>Background</h2>
      <p>
        Over the years, I have honed my skills through various projects and internships. 
        My goal is to use technology to create innovative solutions that make a difference in people's lives. 
        I am always eager to collaborate with others and learn from different perspectives.
      </p>
    </div>
  );
};

export default About;
