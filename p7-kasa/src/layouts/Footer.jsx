import React from 'react';

import './footer.scss';
import logo from '../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;