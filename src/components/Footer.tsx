import React, { FunctionComponent } from 'react';

function Footer<FunctionComponent>() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <br />
      {currentYear}
    </footer>
  );
}

export default Footer;
