import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Header.css';  // Import the CSS file for styling

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About Me</Link>
          </li>
          <li>
            <Link to="/favorites" className="nav-link">Favorites</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
