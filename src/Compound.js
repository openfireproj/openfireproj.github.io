import React from 'react';
import { Finance } from 'financejs'

let ls = require('local-storage');
let finance = new Finance();


class Compound extends React.Component {
  constructor(props) {
    super(props);
    let state = ls.get('compound');
    this.state = state ? state : {};
    this.update = this.update.bind(this);
  }

  update() {
    let f = document.getElementById("compoundWithContributions");
    let newState = {
      principal: f.principal.value,
      rate: f.rate.value,
      periods: f.periods.value
    }

    f.maturity.value = finance.CI(f.rate.value, 12, f.principal.value, f.periods.value);

    this.setState(state => (newState));
    ls.set('compound', newState);
  }

  render() {
    return (
      <form id="compoundWithContributions">
        <fieldset>
          <legend>Compound with Contributions</legend>

          <label>Principal</label>
          <input name="principal"
                 value={this.state.principal} 
                 onChange={this.update} /><br/>
          <label>Rate</label>
          <input name="rate"
                 value={this.state.rate} 
                 onChange={this.update} /><br/>
          <label>Periods</label>
          <input name="periods"
                 value={this.state.periods} 
                 onChange={this.update} /><br/>

          <label>Maturity</label> <input name="maturity"/><br/>
        </fieldset>
      </form>
    );
  }
}

export default Compound;
