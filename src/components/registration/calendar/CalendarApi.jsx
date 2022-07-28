import React from 'react';
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as calendar from './index';
import classnames from 'classnames';
import MiniFooter from '../regFooter/miniFooter';


class CalendarApi extends React.Component {
   static defaultProps = {
      date: new Date(),
      years: [2020, 2021, 2022, 2023, 2024],
      monthNames: [
         'Январь', 'Февраль', 'Март',
         'Апрель', 'Май', 'Июнь', 'Июль', 'Август',
         'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ],
      weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      onChange: Function.prototype
   };
   state = {
      date: this.props.date,
      currentDate: new Date(),
      selectedDate: null,
      thisDate: '',
   };

   get year() {
      return this.state.date.getFullYear();
   }

   get month() {
      return this.state.date.getMonth();
   }

   get day() {
      return this.state.date.getDate();
   }

   handlePrevMonthButtonClick = () => {
      const date = new Date(this.year, this.month - 1);

      this.setState({ date });
   };

   handleNextMonthButtonClick = () => {
      const date = new Date(this.year, this.month + 1);

      this.setState({ date });
   };

   handleSelectChange = () => {
      const year = this.yearSelect.value;
      const month = this.monthSelect.value;

      const date = new Date(year, month);

      this.setState({ date });
   };

   handleDayClick = date => {
      this.setState({ selectedDate: date });
      this.props.onChange(date);
   };
   arreyNumbers = []
   arrDate = []

   booll = true

   style = classnames({
      'active': this.booll
   })

   takeStateDay = (date, item) => {

      const cur = date.toLocaleDateString()

      this.handleDayClick(date)
      this.thisDate = cur
      this.props.funcGetVision(cur)

      this.arreyNumbers.push({
         date: cur,
         bool: true
      })
      this.getArrDate(cur)
   }

   freeDate = (date) => {
      let keys = Object.keys(localStorage);
      const curArr = []
      keys.forEach(item => {
         curArr.push(item.substring(0, item.length - 6).toLowerCase().trim())
      })

      if (curArr.includes(date)) {
         return true
      }
   }
   getArrDate = (cur) => {
      this.arrDate.push(cur)
   }

   render() {
      const { years, monthNames, weekDayNames } = this.props;
      const { currentDate, selectedDate } = this.state;
      const monthData = calendar.getMonthData(this.year, this.month);

      return (
         <section className="register-body">
            <div className="register-header">
               <h3 className="title">Выбор даты</h3>
               <button className="close">
                  <FontAwesomeIcon
                     icon={["fas", "xmark"]}
                     onClick={() => this.props.closeRegister()}
                  />

               </button>
            </div>

            <div className="calendar">
               <header>
                  <button
                     className='change-date'
                     onClick={this.handlePrevMonthButtonClick}>
                     {'<'}
                  </button>

                  <div className="calendar-heder">
                     <div
                        ref={element => this.monthSelect = element}
                        onChange={this.handleSelectChange}
                     >
                        {monthNames[this.month]}
                     </div>
                     <span>,</span>
                     <div
                        ref={element => this.yearSelect = element}
                        onChange={this.handleSelectChange}
                     >
                        {this.year}
                     </div>
                  </div>

                  <button
                     className='change-date'
                     onClick={this.handleNextMonthButtonClick}>
                     {'>'}
                  </button>
               </header>

               <table className='date-table'>
                  <thead>
                     <tr>
                        {weekDayNames.map(name =>
                           <th key={name}>{name}</th>
                        )}
                     </tr>
                  </thead>

                  <tbody>
                     {monthData.map((week, index) =>
                        <tr
                           key={index}
                           className="week"
                        >
                           {week.map((date, index) => date ?

                              <td
                                 key={index}
                                 className={classnames('day', {
                                    'today': calendar.areEqual(date, currentDate),
                                    'selected': calendar.areEqual(date, selectedDate),
                                    'active': this.freeDate(date.toLocaleString('ru',
                                       {
                                          day: 'numeric',
                                          month: 'long',
                                          //year: 'numeric'
                                       })),
                                 })}
                                 onClick={(e) => this.takeStateDay(date, e.target)}
                              >
                                 {date.getDate()}
                              </td>
                              :
                              <td key={index} />
                           )}
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>

            <MiniFooter />

         </section>
      );
   }
}

export default CalendarApi;

