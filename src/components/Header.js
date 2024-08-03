import React from 'react';
import kluimage from '../klu.png';
import './Header.css'; // Import the CSS file for header styling

const Header = () => {
  return (
    <header className="header">
      <img src={kluimage} alt="KLU logo" className="header-logo" />
      <h1 className="header-title">KL University</h1>
    </header>
  );
};

export default Header;
