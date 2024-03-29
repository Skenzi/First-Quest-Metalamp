import $ from 'jquery';
import './styles/main.scss';
import header from './modules/header/header.js';
import dropdown from './ui-kit/dropdown/dropdown.js';
import addDatepickersTo from './ui-kit/datepicker/datepicker.js';

const runApp = () => {
    header();
    dropdown();
    addDatepickersTo([
        {
            idInput: '#datepicker',
        },
        {
            idInput: '#daterange',
            options: {
                range: true,
                fromTarget: '#daterange-from',
                toTarget: '#daterange-to',
                events: {
                    hidden: true
                }
            }
        }
    ])
};

runApp();