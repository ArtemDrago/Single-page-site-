import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import back from '../../resources/icons/back.svg'
import { useForm } from "react-hook-form";
import './style.scss'


function FormRegister({ closeVisionForm, closeRegister, date, openVisionSucsess }) {
   const { register, handleSubmit, watch } = useForm()
   const onSubmit = (data) => {
      localStorage.setItem(`${date}`, JSON.stringify(data))
      openVisionSucsess()
   };
   const newDate = date.substring(0, date.length - 6) + ',' + date.substring(date.length - 5, date.length)
   return (
      <div className='form-container'>
         <div className="time-header">
            <div
               className='go-back'
               onClick={() => closeVisionForm()}
            >
               <img src={back} />
            </div>
            <h3 className="title time-title" >
               Оформление заявки
            </h3>
            <button
               className='close'
               onClick={() => closeRegister()}
            >
               <FontAwesomeIcon
                  icon={["fas", "xmark"]}
               />
            </button>
         </div>
         <h3 className="date-time">
            {newDate}
         </h3>
         <form
            name='register'
            className='main-form'
            onSubmit={handleSubmit(onSubmit)}>
            <input
               type="text"
               className='form-input'
               placeholder='Номер телефона'
               {...register("number", { required: true, maxLength: 20 })}
            />
            <input
               type="text"
               className='form-input'
               placeholder='E-mail'
               {...register("email", {
                  pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
               })
               }
            />
            <input
               type="text"
               className='form-input'
               placeholder='Ваше имя'
               {...register("firstName", { required: true, maxLength: 20 })}
            />
            <button
               type='submit'
               className='btn-look'
               onSubmit={handleSubmit(onSubmit)}
            >
               Записаться на просмотр
            </button>
         </form>
      </div>
   );
}

export default FormRegister;