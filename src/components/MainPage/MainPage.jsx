import React from 'react';
import './style.scss'
import logo from '../resources/logo/logo.svg'
import main from '../resources/image/main.png'
import RegisterMain from '../registration/registerMain/RegisterMain';
import { useState } from 'react';
import { useMemo } from 'react';

function MainPage() {
   const [vision, setVision] = useState(false)
   const [arr, setArr] = useState(['blblbl', 'sdsdsd'])

   const getVision = () => {
      setVision(true)
   }
   const closeRegister = () => {
      setVision(false)
   }





   return (
      <section className='fullscreen'>
         {vision
            ?
            <RegisterMain
               closeRegister={closeRegister}
            />
            : <></>
         }
         <img src={main} className="fullscreen-main" />
         <div className="fullscreen-body">
            <img src={logo} className="fullscreen-logo" />
            <h1 className="fullscreen-title">
               Жилой комплекс
               <br />
               в центре города
            </h1>
            <div className="fullscreen-text">
               Создатели проекта хотели создать для вас атмосферу
               бесконечного космического пространства,
               спокойствия и уединения в окружении элегантных интерьеров.
            </div>
            <button
               className="fullscreen-btn"
               onClick={() => getVision()}
            >
               Записаться на просмотр
            </button>
         </div>

      </section>
   );
}

export default MainPage;