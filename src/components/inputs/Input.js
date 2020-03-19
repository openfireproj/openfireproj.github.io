import React from 'react';

import MoneyInput from './Money';
import SelectInput from './Select'
import TextField from '@material-ui/core/TextField';

export default class Input extends React.Component {
  render() {
    const { type } = this.props.config;    
    let Input = TextField;
    switch(type) {
      case 'currency': 
        Input = MoneyInput;
        break;
      case 'select':
        Input = SelectInput;
        break;
      default:
        Input = TextField
    }
    return <Input {...this.props}/>;
  }
}
