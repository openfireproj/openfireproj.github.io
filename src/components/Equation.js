import React from 'react';
import { TextField } from '@material-ui/core';
import Money from '../components/inputs/Money';
import LineGraph from '../graphs/line';


let storage = require('local-storage');

/*
if in storage look up value, else return value
*/
export function formGet(name, form) {
  if (false) {
    return storage.get('state')[name];
  } else {
    let value = form[name].value;

    if (value === '') {
      return value;
    } else if (value.match(/a-zA-Z_/)) {
      //if (value in storage.get('state')) {

      //}
      return "blank"

    } else {
      return parseFloat(form[name].value);
    }
  }
}

export class Equation extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.loadEqn()
    this.update = this.update.bind(this);
    this.formName = 'endurance'
  }

  update() {
    var form = document.getElementById(this.formName);
    this.setState(state => (this.updateEqn(form)));
  }

  render() {
    const state = this.state;
    const args = [state.principal, state.burnRate]

    const attribs = []
    for (const key in state) {
      if (key == 'eqn') { continue; }
      attribs.push(
        <TextField id={key} label={key} key={key}
                value={state[key]} 
              variant="outlined" 
             onChange={this.update} />
      )
    }

    return (
      <div>
        <form id="endurance" name="endurance"> 
          <fieldset> <legend>Endurance</legend>
            {attribs}
            <LineGraph args={args} eqn={state.eqn}/>
          </fieldset>
        </form>
      </div>
    )
  }
}
