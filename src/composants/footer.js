import React from 'react';
import '../styles/style-composants/footer.scss';
import LogoFooter from '../images/logo-footer.svg'


function Footer() {
  return (
    <footer>
        <img src={LogoFooter} alt="Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
