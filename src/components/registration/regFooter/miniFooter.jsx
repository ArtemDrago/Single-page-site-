import React from 'react';
import './style.scss'

function MiniFooter() {
   return (
      <div className="take">
         <div className='color-container'>
            <div className="black"></div>
            <span className='black-text'>Запись есть</span>
         </div>
         <div className='color-container'>
            <div className="grey"></div>
            <span className='gray-text'>Записи нет</span>
         </div>
      </div>
   );
}

export default MiniFooter;