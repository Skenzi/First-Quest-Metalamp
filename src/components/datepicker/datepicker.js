import $ from 'jquery';
import'@dmuy/jquery-datepicker/duDatepicker.css'
import duDatepicker from '@dmuy/jquery-datepicker';

export default (elements) => {
    elements.forEach(({ idInput, options = {}}) => {
        const mainInput = $(idInput);
        mainInput.duDatepicker({
            format: 'dd.mm.yyyy',
            ...options
        })

        const parentOfInput = mainInput.parent();
        
        const datepickers = $('.dcalendarpicker');
        const lastDatepicker = datepickers.last();

        lastDatepicker.attr('data-input-id', idInput);
        parentOfInput.append(lastDatepicker);
    })
}

const test = 'test';