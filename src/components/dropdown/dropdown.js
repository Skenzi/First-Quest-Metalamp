import $ from 'jquery';

export default () => {
    $('.dropdown').each(function() {
        const dropdown = this;
        const dropdownMenu = $(dropdown).find('.dropdown-menu');
        $(dropdownMenu).find('.dropdown-menu-el').each(function() {
            let count = 0;
            const elCount = $(this).find('.el-count');
            $(elCount).find('.button').each(function() {
                $(this).click(function() {
                    const contentBtn = $(this).text();
                    count = contentBtn === '+' ? count + 1 : count - 1;
                    if (count < 0) {
                        count = 0;
                    };
                    $(elCount).find('.count').text(`${count}`);
                });
            });
        });
        $(dropdown).find('.dropdown-toggle').click(function() {
            $(this).toggleClass('show');
            dropdownMenu.toggleClass('active');
        });
    });
};