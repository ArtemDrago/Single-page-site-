import React from 'react';
import MapCase from '../mapCase/MapCase';
import Contact from '../contact/Contact';
import './style.scss'

function Footer() {
   return (
      <footer className='footer-container'>
         <Contact />
         <MapCase />
      </footer>
   );
}

export default Footer;