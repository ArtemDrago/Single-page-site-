import React from 'react';
import './style.scss'
import CalendarApi from '../calendar/CalendarApi';
import { useState } from 'react';
import Time from '../time/Time';
import FormRegister from '../form/FormRegister';
import Sucsess from '../sucsessfulRegistrate/Sucsess';


function RegisterMain({ closeRegister }) {
   const [vision, setVision] = useState(false)
   const [formVision, setFormVision] = useState(false)
   const [sucsessVision, setSucsessVision] = useState(false)
   const [propsDate, setPropsDate] = useState('')
   const [dateTimeForm, setDateTimeForm] = useState('')

   const funcGetVision = (date) => {
      setVision(true)
      setPropsDate(date)
   }
   const closeDate = () => {
      setVision(false)
   }
   const openVisionForm = () => {
      setFormVision(true)

   }
   const closeVisionForm = () => {
      setFormVision(false)
   }
   const openVisionSucsess = () => {
      setSucsessVision(true)

   }
   const closeVisionSucsess = () => {
      setSucsessVision(false)
   }

   const allTimeAndDate = (item, time) => {
      setDateTimeForm(item + ' ' + time)
   }

   return (
      <section
         className='register-main'
         onClick={() => closeRegister()}
      >
         <div
            className='register'
            onClick={(e) => e.stopPropagation()}
         >
            <CalendarApi
               closeRegister={closeRegister}
               funcGetVision={funcGetVision}
            />
            {vision ?
               <Time
                  date={propsDate}
                  closeRegister={closeRegister}
                  closeDate={closeDate}
                  openVisionForm={openVisionForm}
                  allTimeAndDate={allTimeAndDate}
               />
               :
               <></>
            }
            {formVision ?
               <FormRegister
                  closeVisionForm={closeVisionForm}
                  closeRegister={closeRegister}
                  date={dateTimeForm}
                  openVisionSucsess={openVisionSucsess}
               />
               :
               <></>
            }
            {sucsessVision ?
               <Sucsess
                  closeVisionSucsess={closeVisionSucsess}
                  closeRegister={closeRegister}
               />
               :
               <></>
            }
         </div>
      </section>
   );
}

export default RegisterMain;