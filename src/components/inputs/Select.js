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
    for (const [display, val] of Object.entries(this.props.config.options)) {
      this.options.push(
        <MenuItem key={val} value={val}>{display}</MenuItem>
      )
    }
  }

  handleChange = (event, value) => {
    const { name, onChange } = this.props;
    onChange(name, event.target.value);
  }

  render() {
    const { name, config, value } = this.props;
    const inputId = `select-input-${config.label}`;
    return (
      // TODO: replace inline style with CSS
      <div className="MuiFormControl-root" style={{paddingLeft: "10px", paddingRight: "10px"}}>
        <InputLabel shrink htmlFor={name}>{config.label}</InputLabel>   
        <Select
          value={value}
          onChange={this.handleChange}
          inputProps={{
            name: name,
            id: inputId,
          }}
        >
          {this.options}
        </Select>
      </div>
    );
  }
}
          
