import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class SelectInput extends React.Component {            
  constructor(props) {
    super(props);

    // because options are static, we only need to build them once.
    //so we do it here in the constructor and assign it as an instance variable on the class
    this.options = [];    
    for (const [display, val] of Object.entries(this.props.options)) {
      this.options.push(
        <MenuItem value={val}>{display}</MenuItem>
      )
    }
  }

  handleChange = (event, value) => {
    const { fieldKey, onChange } = this.props;
    onChange(fieldKey, event.target.value);
  }

  render() {
    const { fieldKey, label, value } = this.props;
    const inputId = `select-input-${label}`;
    return (
      // TODO: replace inline style with CSS
      <div className="MuiFormControl-root" style={{paddingLeft: "10px", paddingRight: "10px"}}>
        <InputLabel shrink htmlFor={fieldKey}>{label}</InputLabel>   
        <Select
          value={value}
          onChange={this.handleChange}
          inputProps={{
            name: {fieldKey},
            id: {inputId},
          }}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
          
