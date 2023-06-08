/*import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

export default (elements) => {
    elements.forEach(({ idInput, options = {}}) => {
        const date = new AirDatepicker(idInput, {
            buttons: ['clear'],
            visible: true
        });
    })
}
*/
const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

class Calender {
    constructor() {
        this.currentDate = Date.now();

        this.currentDay = new Date(this.currentDate).getDate();
        this.currentYear = new Date(this.currentDate).getFullYear();
        this.currentMonthIndex = new Date(this.currentDate).getMonth();

        this.calenderYear = this.currentYear;
        this.calenderMonthIndex = this.currentMonthIndex;

        this.calender = this.createCalender();
    }

    createCalender() {
        const calenderMonthIndex = this.getMonth();
        const calenderYear = this.getYear();
        const lastDay = new Date(calenderYear, calenderMonthIndex + 1, 0).getDate();

        const firstWeekday = new Date(calenderYear, calenderMonthIndex, 1).getDay();

        const prevMonth = calenderMonthIndex === 0 ? 11 : calenderMonthIndex - 1;
        const prevYear = calenderMonthIndex === 0 ? calenderYear - 1 : calenderYear;
        const prevLastDay = new Date(prevYear, prevMonth + 1, 0).getDate();

        const calender = [];

        const daysInWeek = 7;

        let numberDay = 1;
        let isCurrentMonth = true;
        let currentMonthFilling = prevMonth + 1;
        let currentYearFilling = prevYear;

        if (firstWeekday !== 1) {
            numberDay = prevLastDay - new Date(prevYear, prevMonth, prevLastDay).getDay() + 1;
            isCurrentMonth = false;
        }

        const weekCount = 6;
        for (let row = 0; row < weekCount; row += 1) {
            const week = new Array(daysInWeek);
            for (let col = 0; col < daysInWeek; col += 1) {
                if ((numberDay > prevLastDay && row === 0)) {
                    numberDay = 1;
                    currentMonthFilling += 1;
                    isCurrentMonth = true;
                }
                if (currentMonthFilling > 12) {
                    currentMonthFilling = 1;
                    currentYearFilling += 1;
                }

                week[col] = {
                    numberDay,
                    isCurrentMonth,
                    fullDate: `${currentMonthFilling}.${numberDay}.${currentYearFilling}`,
                    isCurrentDay: this.currentDay === numberDay && this.currentMonthIndex === calenderMonthIndex && this.currentYear === calenderYear,
                };
                numberDay += 1;

                if ((numberDay > lastDay && row !== 0)) {
                    numberDay = 1;
                    row = weekCount;
                    currentMonthFilling += 1;
                    isCurrentMonth = false;
                }
            }
            calender.push(week);
        }
        this.calender = calender;

        return calender;
    }

    getCalender() {
        return this.calender;
    }

    getMonth() {
        return this.calenderMonthIndex;
    }

    getYear() {
        return this.calenderYear;
    }

    setCalenderMonth(num) {
        this.calenderMonthIndex += num;
        if (this.calenderMonthIndex > 11) {
            this.calenderMonthIndex = 0;
            this.setCalenderYear(1);
        }
        if (this.calenderMonthIndex < 0) {
            this.calenderMonthIndex = 11;
            this.setCalenderYear(-1);
        }
    }

    setCalenderYear(num) {
        this.calenderYear += num;
    }
}

const renderCalender = (calenderElements, calenderApi) => {

    const calender = calenderApi.getCalender();

    const { daysContainer } = calenderElements;
    daysContainer.textContent = '';

    const calenderMonth = calenderElements.calenderTop.querySelector('.calender-top__month');
    const currentMonthIndex = calenderApi.getMonth();
    const currentYear = calenderApi.getYear();

    calenderMonth.textContent = months[currentMonthIndex] + ' ' + currentYear;

    for (const week of calender) {
        const row = document.createElement('div');
        for (const day of week) {
            const dayEl = document.createElement('span');
            const activeDayClass = (day.isCurrentMonth ? 'calender-body__cell--active' : 'calender-body__cell--inactive');
            const todayClass = day.isCurrentDay && 'calender-body__cell--today';
            dayEl.classList.add('calender-body__cell', activeDayClass, todayClass);
            dayEl.setAttribute('data-date', day.fullDate);
            dayEl.textContent = day.numberDay;

            row.append(dayEl);
        }
        daysContainer.append(row);
    }
}

const daterangeHandler = (parent) => (ev) => {
    const inputFrom = parent.querySelector('[data-daterange-from]');
    const inputTo = parent.querySelector('[data-daterange-to]');

    const valueFrom = inputFrom.value;
    const valueTo = inputTo.value;

    const dateValue = ev.target.getAttribute('data-date');
    const date = new Date(dateValue).getTime();

    const dateFrom = new Date(valueFrom).getTime();
    console.log(date, dateFrom, dateValue, valueFrom, new Date(dateValue))
    if(!valueFrom) {
        inputFrom.value = dateValue;
    } else if(!valueTo) {
        inputTo.value = dateValue;
    } else if(date < dateFrom) {
        inputFrom.value = dateValue;
        inputTo.value = valueTo;
    } else {
        inputTo.value = dateValue;
    }
}

const datepickHandler = (parent) => (ev) => {
    const input = parent.querySelector('input');
}

export default () => {
    document.querySelectorAll('.datepicker').forEach(datepicker => {
        const calenderApi = new Calender();

        const calenderElements = {
            daysContainer: datepicker.querySelector('.calender-body__days'),
            calenderTop: datepicker.querySelector('.calender-top'),
            calenderClearButton: datepicker.querySelector('[data-calender-clear]'),
            calenderSubmitButton: datepicker.querySelector('[data-calender-submit]'),
            calenderWrapper: datepicker.querySelector('.calender-wrapper'),
            datepicker,
        };

        // Добавление событий для переключения месяцев START
        calenderElements.calenderTop.querySelectorAll('button').forEach((button, ind) => {
            button.addEventListener('click', () => {
                calenderApi.setCalenderMonth(ind === 0 ? -1 : 1);
                calenderApi.createCalender();
                renderCalender(calenderElements, calenderApi);
            })
        })
        // END

        renderCalender(calenderElements, calenderApi);

        const inputs = datepicker.querySelectorAll('input');

        inputs.forEach(input => {
            input.addEventListener('click', () => {
                calenderElements.calenderWrapper.classList.add('active');
            })
        });

        calenderElements.daysContainer.addEventListener('click', inputs.length === 1 ? datepickHandler(datepicker) : daterangeHandler(datepicker));

    })
}