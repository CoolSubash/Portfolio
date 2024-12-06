import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="footer">
      <p>
        Copyright © {currentYear} | Made with love ❤️
      </p>
    </footer>
  );
};

export default Footer;
