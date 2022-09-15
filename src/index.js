import $ from 'jquery';
import './scss/main.scss';
import header from './components/header/header.js';
import dropdown from './components/dropdown/dropdown.js';
import addDatepickersTo from './components/datepicker/datepicker.js';

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