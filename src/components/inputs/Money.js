import React from 'react';
import numeral from 'numeral';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class MoneyInput extends React.Component {        
    handleChange = event => {
        const { fieldKey, onChange } = this.props;
        let val = event.target.value;
        // strip out any non-numerals
        val = val.replace(/\D+/g, '');
        onChange(fieldKey, val);
    }
    render() {
        const { currencySymbol = "$", label, value } = this.props;
        const inputId = `money-input-${label}`;
        return (
            <div>
                <InputLabel htmlFor={inputId}>{label}</InputLabel>
                <Input
                    id={inputId}
                    value={numeral(value).format("0,0")}
                    onChange={this.handleChange}
                    startAdornment={<InputAdornment position="start">{currencySymbol}</InputAdornment>}
                />
            </div>
        );
    }
}
          