import React, { FunctionComponent } from 'react';
import './style.css';

const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <br />
      {currentYear}
    </footer>
  );
};

export default Footer;
