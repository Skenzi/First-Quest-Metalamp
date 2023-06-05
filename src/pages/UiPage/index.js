import './ui-kit.scss';
import 'jquery-mask-plugin';
import runScripts from './pages/form_elements';

runScripts();
/*
.container
      include ../../components/header/header.pug
      include ../../components/card/card.pug
      include ../../components/checkbox/checkbox.pug
      include ../../components/toggle/toggle.pug
      include ../../components/dropdown/dropdown.pug
      include ../../components/datepicker/datepicker.pug
      +checkbox({class: 'toggle', for: 'switcherAccept'}, 'toggle-input')
      +checkbox({class: 'checkbox', for: 'name'}, 'checkbox-input', 'checkbox simple')
      +dropdown('Dropdown menu')
      +datepicker()
      +card-hotel-number()
      +card-sign-up()
      +card-sign-in()
      +card-dates()
      +toggle({class: 'toggle', for: 'switcher'})
      include ../../components/footer/footer.pug
*/