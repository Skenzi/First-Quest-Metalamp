import $ from 'jquery';

export default () => {
    $('.wrapper-dropdown').each(function() {
        $(this).click(function() {
            $(this).find('.dropdown').toggleClass('active');
        });
    });
};