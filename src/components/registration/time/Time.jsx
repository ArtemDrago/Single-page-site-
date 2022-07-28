import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './style.scss'
import back from '../../resources/icons/back.svg'
import MiniFooter from '../regFooter/miniFooter';
import { useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';

function Time({ date, closeRegister, closeDate, openVisionForm, allTimeAndDate }) {

   const dayDate = date.substring(0, 2)
   const mouns = date.substring(3, date.length - 5)

   const sizon = [
      'Января', 'Февраля', 'Марта',
      "Апреля", "Мая", 'Июня',
      'Июля', "Августа", 'Сентября',
      'Октября', 'Ноября', 'Декабря'
   ]
   const funcMouns = () => {
      if (+mouns[0] === 0) {
         return sizon[`${+mouns[1] - 1}`] + ' '
      }
      return sizon[`${+mouns - 1}`]
   }
   const funcDay = () => {
      if (+dayDate[0] === 0) {
         return ' ' + dayDate[1]
      }
      return dayDate
   }
   const total = () => {
      return funcDay() + ' ' + funcMouns()

   }
   const totalDay = total()
   const [keyDate, setKeyDate] = useState('')
   const [currentTime, setCurrentTime] = useState({})
   const [dateTime, setDateTime] = useState([])
   const [registerTime, setRegisterTime] = useState([])
   const [keyTime, setkeyTime] = useState([])

   const [thatTime, setThatTime] = useState([
      ' 8:00', ' 8:30', ' 9:00', ' 9:30', '10:00', '10:30', '11:00', '11:30', '',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
      '16:00', '16:30', '17:00', '17:30', '',
      '18:00', '18:30', '19:00', '19:30',
   ])
   const getClose = () => {
      closeRegister()
   }

   const keyTake = () => {
      let keys = Object.keys(localStorage);
      let curArr = []
      for (let key of keys) {
         curArr.push(key)
      }
      setRegisterTime(curArr)
   }

   useMemo(() => {
      keyTake()
   }, [])

   useEffect(() => {
      const curArr = []
      const dateArr = []
      for (let key of registerTime) {
         curArr.push(key.substring(8, 13))
         dateArr.push(key.substring(0, 7))
      }
      setkeyTime(curArr)
      setDateTime(dateArr)
   }, [registerTime])

   useEffect(() => {
      const allTime = document.querySelectorAll('.time-item')
      allTime.forEach(element => {
         registerTime.forEach(item => {
            if (item.substring(item.length - 5, item.length) === element.textContent
               && totalDay === item.substring(0, item.length - 6)) {
               element.classList.add('time-active')
            }
         })
      })
   }, [currentTime, date])
   const valuTime = (item, el) => {
      allTimeAndDate(totalDay, item)
      setKeyDate(totalDay + ' ' + item)
      openVisionForm()
   }

   useEffect(() => {
      const changeValue = JSON.parse(localStorage.getItem(`${keyDate}`))
      setCurrentTime(keyDate, changeValue)

   }, [keyDate])


   return (
      <div className='time-container'>
         <div className="time-header">
            <div
               className='go-back'
               onClick={() => closeDate()}
            >
               <img src={back} />
            </div>
            <h3 className="title time-title">
               Выбор времени
            </h3>
            <button
               className='close'
               onClick={() => getClose()}
            >
               <FontAwesomeIcon
                  icon={["fas", "xmark"]}
               />
            </button>
         </div>
         <h3 className="date-time">
            {totalDay}
         </h3>

         <div className='time'>
            {thatTime.map((item, index) =>
               <button
                  key={index}
                  className="time-item"
                  onClick={(e) => valuTime(item, e.target)}
                  disabled={(index == 8 || index == 21) ? true : false}
               >
                  {item}
               </button>
            )}
         </div>
         < MiniFooter />
      </div >
   );
}

export default Time;