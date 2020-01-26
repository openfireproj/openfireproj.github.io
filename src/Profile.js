import React from 'react';
import { TextField } from '@material-ui/core';


let storage = require('local-storage');

export let Profile = {
  // Sorry
  get: (key) => {
    return storage.get(key);
  },

  getS: (key) => {
      return parseFloat(storage.get('state')[key])
  },

  set: (key, value) => {
    storage.set(key, (value));
  },

  all: () => {
    let state = storage.get('state');

    return state;
  }
}

export class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    var default_ = {
        netWorth: 0.0,
        burnRate: 0.0,
        salary: 0,
        age: 0
    }
    var stored = Profile.get('state');

    this.state = stored ? stored : default_;
    this.update = this.update.bind(this);
  }

  update() {
    var profile = document.getElementById('profile');
    var newState = {
      netWorth: profile.netWorth.value,
      burnRate: profile.burnRate.value,
      salary: profile.salary.value,
      age: profile.age.value
    };

    this.setState(state => (newState));
    Profile.set('state', newState);
  }

  render() {
    const attribs = []
    for (const key in Profile.all()) {
      attribs.push(
        <TextField id={key} label={key} key={key}
                value={Profile.all()[key]} 
              variant="outlined" 
             onChange={this.update} />
      )
    }

    return (
      <form id="profile">
        <fieldset>
          <legend>Profile</legend>
          {attribs}
        </fieldset>
      </form>
    );
  }
}

module.export = {
  ProfileComponent: ProfileComponent,
  Profile: Profile
}
