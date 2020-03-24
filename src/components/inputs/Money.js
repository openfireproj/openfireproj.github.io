import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

export default class MoneyInput extends React.Component {        
  handleChange = (event, value) => {
    const { name, onChange } = this.props;
    try {
      onChange(name, parseFloat(value));
    } catch {
      console.warn(`${name} - invalid input: ${value}`);
    }        
  }

  render() {
    const { currencySymbol, config, value } = this.props;
    const inputId = `money-input-${config.label}`;
    return (
      <CurrencyTextField
        // TODO: replace inline style with CSS
        style={{paddingLeft: "10px"}}
        id={inputId}
        label={config.label}
        variant="standard"
        value={value}
        currencySymbol={currencySymbol}
        outputFormat="string"
        decimalCharacter="."
        digitGroupSeparator=","
        onChange={this.handleChange}
      />
    );
  }
}
