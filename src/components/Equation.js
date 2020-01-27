import React from 'react';
import { TextField } from '@material-ui/core';
import LineGraph from '../graphs/line';


let storage = require('local-storage');

function formFieldName(formName, name) {
  return formName + '_' + name
}

/*
if in storage look up value, else return value
*/
export function formGet(name, form) {
  const fqName = formFieldName(form.name, name);

  if (false) {
    return storage.get('state')[name];
  } else {
    let value = form[fqName].value;

    if (value === '') {
      return value;
    } else if (value.match(/a-zA-Z_/)) {
      //if (value in storage.get('state')) {

      //}
      return "blank"

    } else {
      return parseFloat(form[fqName].value);
    }
  }
}

export class Equation extends React.Component {
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
  }

  update() {
    const form = document.getElementById(this.formName);
    this.setState(state => (this.updateEqn(form)));
  }

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
                       .filter(kv => !['eqn'].includes(kv[0]))
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
        <TextField id={fqKey} label={key} key={key}
                value={state[key]} 
              variant="outlined" 
             onChange={this.update} />
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
