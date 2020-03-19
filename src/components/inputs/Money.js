import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

export default class MoneyInput extends React.Component {        
  // TODO calculated fields don't update 
  handleChange = (event, value) => {
    const { name, onChange } = this.props;
    try {
      onChange(name, parseFloat(value));
    } catch {
      console.warn(`${name} - invalid input: ${value}`);
    }        
  }

  render() {
    // TODO what if the user hasn't filled in a value yet?
    // NaN, object, html garbage
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
