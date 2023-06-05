const normalizeDate = (elValue, mask, divider) => {
    let res = '';
    const numbers = elValue.split('/').join('');
    let k = 0;
    for (let i = 0; i < numbers.length && i < mask.length - 2; i += 1) {
        if (mask[k] === divider) {
            res += divider;
            k += 1;
        }
        res += numbers[i];
        k += 1;
    }
    return res;
}
/*
console.log(normalizeDate('1', '__/__/____', '/'));
console.log(normalizeDate('0123456789', '__/__/____', '/'));
console.log(normalizeDate('11/12/1', '__/__/____', '/'));
console.log(normalizeDate('11//1', '__/__/____', '/'));*/

export default (mask, divider) => {
    $(document).find('[data-masked]').each(function() {
        const el = $(this);
        function handler() {
            const elValue = el.val() || '';
            const normalizedDate = normalizeDate(elValue, mask, divider);
            el.val(normalizedDate);
        }
        el.on('input', handler)
    })
}