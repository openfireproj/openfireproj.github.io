import React from 'react';

var ls = require('local-storage');


class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    var default_ = {
        netWorth: 0.0,
        salary: 0,
        age: 0
    }
    var stored = ls.get('state');

    this.state = stored ? stored : default_;
    this.update = this.update.bind(this);
  }

  update() {
    var worth = document.getElementById('worth');
    var newState = {
      netWorth: worth.netWorth.value,
      salary: worth.salary.value,
      age: worth.age.value
    };

    this.setState(state => (newState));
    ls.set('state', newState);
  }

  render() {
    return (
      <fieldset>
        <form id="worth">
          <label>Net Worth</label>
          <input name="netWorth" 
                 value={this.state.netWorth} 
                 onChange={this.update}/><br/>
          <label>Salary</label>
          <input name="salary" 
                 value={this.state.salary} 
                 onChange={this.update}/><br/>
          <label>Age</label>
          <input name="age" 
                 value={this.state.age} 
                 onChange={this.update}/><br/>
        </form>
      </fieldset>
    );
  }
}

export default ProfileComponent;
