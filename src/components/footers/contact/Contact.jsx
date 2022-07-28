import React from 'react';
import './style.scss'
import logo2 from '../../resources/logo/logo2.svg'

function Contact() {
   return (
      <div className='contact-block'>
         <img src={logo2} alt="" className='logo-footer' />
         <div className="block-content">
            <ul className='block-list'>
               <li className='block-contact'>
                  <h4 className="contact-title">Адрес</h4>
                  <div className="info">ул. Строительная, 11, Екатеринбург</div>
                  <a href='mailto:hello@saturn.pro' className="info">hello@saturn.pro</a>
                  <div className="info phone">+ 7 922 555 1234</div>
               </li>
               <li className='block-messagers'>
                  <h4 className="contact-title">Соцсети</h4>
                  <a href='#' className="info">Telegram</a>
                  <a href='#' className="info">Twitter</a>
                  <a href='#' className="info">Pinterest</a>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Contact;