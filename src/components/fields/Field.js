import MoneyInput from './Money';
import TextField from '@material-ui/core/TextField';


export default (type) => {
  switch(type) {
    case 'currency': return MoneyInput
    case 'default':  return TextField
    default:         return TextField
  }
}

