import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

export default (elements) => {
    elements.forEach(({ idInput, options = {}}) => {
        const date = new AirDatepicker(idInput, {
            buttons: ['clear'],
            visible: true
        });
    })
}

const testDatepicker = () => {
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
    ]
    const currentDate = Date.now();
    const currentMonthIndex = new Date(currentDate).getMonth();
    const currentDay = new Date(currentDate).getDate();
    const currentYear = new Date(currentDate).getFullYear();
    const lastDay = new Date(currentYear, currentMonthIndex + 1, 0).getDate()

    console.log(lastDay, currentDay, currentMonthIndex, currentYear)
};

testDatepicker()