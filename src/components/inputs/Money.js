import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

export default class MoneyInput extends React.Component {        
    handleChange = (event, value) => {
        const { fieldKey, onChange } = this.props;
        try {
            onChange(fieldKey, parseFloat(value));
        } catch {
            console.warn(`${fieldKey} - invalid input: ${value}`);
        }
        
    }
    render() {
        const { currencySymbol, label, value } = this.props;
        const inputId = `money-input-${label}`;
        return (
            <div>
                <CurrencyTextField
                    id={inputId}
                    label="Amount"
                    variant="standard"
                    value={value.toString()}
                    currencySymbol={currencySymbol}
                    outputFormat="string"
                    decimalCharacter="."
                    digitGroupSeparator=","
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}
          