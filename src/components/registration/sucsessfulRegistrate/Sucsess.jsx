import React from 'react';
import './style.scss'

function Sucsess({ closeRegister, closeVisionSucsess }) {

   const closeAll = () => {
      closeVisionSucsess()
      closeRegister()
   }
   return (
      <div className='sucsess-container'>
         <div className="sucsess-content">
            <h2 className="sucsess-title">
               Просмотр<br /> запланирован
            </h2>
            <div className="sucsess-text">
               Дополнительная информация будет отправлена на <br />
               указанный почтовый адрес или номер телефона.
            </div>
            <button
               className='sucsess-button'
               onClick={() => closeAll()}
            >
               На главную
            </button>
         </div>
      </div>
   );
}

export default Sucsess;