import React from 'react';
import Footer from '../footers/footer/Footer';
import MainPage from '../MainPage/MainPage';
import './style.scss'

function RootComponent() {
   return (
      <div className='root'>
         <MainPage />
         <Footer />
      </div>
   );
}

export default RootComponent;