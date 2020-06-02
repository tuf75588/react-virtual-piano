import React, { FunctionComponent } from 'react';
import './style.css';

const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <br />
      Made with{' '}
      <span role="img" aria-label="heart">
        💗
      </span>{' '}
      by Andrew Davis (atd285) - {currentYear}
    </footer>
  );
};

export default Footer;
