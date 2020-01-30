import React from 'react';
import { TextField } from '@material-ui/core';
import LineGraph from '../graphs/line';


function formFieldName(formName, name) {
  return formName + '_' + name
}

export class Equation extends React.Component {  
  formName = this.constructor.name

  handleChange = (key, event) => {
    let val = parseFloat(event.target.value);

    this.setState((state,props) => {
        state[key] = val
        return this.updateEqn(state);
    })
  };

  /*
    override this method if you wish to add additonal 
    calculated fields onto the equation.

    see `Endurance` for an example.
  */
  updateEqn(_) { return _ }

  /**
    args 

    override this method if you'd like to change the
    values or order of values which will be passed to 
    graphing. you may be able to reorder your state list,
    and leave this as is. 

    @param state The Equation's Parameter state

    @returns Array (likely referencing state values.)

    e.g.
    ```
    graphArgs(state) {
        return [state.principal, state.interestRate];
    }
    ```
  */
  graphArgs(state) {
    let params = Object.entries(state)
                       .map(kv => state[kv[0]])
    return params;
  }            

  description() { }

  render() {
    const state = this.state;
    let widgets;

    const attribs = []
    for (const key in state) {
      const fqKey = formFieldName(this.formName, key);

      attribs.push(
        <TextField
          id={fqKey}
          label={key}
          key={key}
          value={state[key]} 
          variant="outlined" 
          onChange={event => this.handleChange(key, event)}
        />
      )
    }

    if (this.graph) {
      widgets = (
        <LineGraph args={this.graphArgs(state)} eqn={this.eqn}/>
      )
    }

    return (
      <div>
        <form id={this.formName} name={this.formName}> 
          <fieldset>
            <legend>{this.formName}</legend>
            <p>{this.description()}</p>
            {attribs}
            {widgets}
          </fieldset>
        </form>
      </div>
    )
  }
}
