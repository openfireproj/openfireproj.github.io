import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

export default class MoneyInput extends React.Component {        
    // TODO calculated fields don't update 
    handleChange = (event, value) => {
        const { fieldKey, onChange } = this.props;
        try {
            onChange(fieldKey, parseFloat(value));
        } catch {
            console.warn(`${fieldKey} - invalid input: ${value}`);
        }
        
    }
    render() {
        // TODO what if the user hasn't filled in a value yet?
        // NaN, object, html garbage
        const { currencySymbol, label, value } = this.props;
        const inputId = `money-input-${label}`;
        return (
            <CurrencyTextField
                id={inputId}
                label={label}
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
          
