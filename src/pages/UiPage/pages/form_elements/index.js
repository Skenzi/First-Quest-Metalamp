import dropdownRun from '../../../../ui-kit/dropdown/dropdown';
import inputrun from '../../../../ui-kit/input/input';
import datepickerRun from '../../../../ui-kit/datepicker/datepicker';

const runScripts = () => {
    dropdownRun();
    inputrun('__/__/____', '/');
    datepickerRun();
};

export default runScripts;