import React from 'react';
import { TextField } from '@material-ui/core';


let storage = require('local-storage');

export let Profile = {
  profile: (key) => {
    if (storage.get('profile')) {
      return parseFloat(storage.get('profile')[key]);
    }
    return undefined;
  },
  profileSet: (key, value) => {
    let profile = Profile.all()
    profile[key] = value
    storage.set('profile', profile)
  },

  get: (key) => {
    return storage.get(key);
  },

  set: (key, value) => {
    storage.set(key, (value));
  },

  all: () => {
    let profile = storage.get('profile');
    if ( profile === null ) {
        profile = {
          netWorth: 0.0,
          burnRate: 0.0,
          salary: 0,
          age: 0
        }
    }

    return profile;
  },

  defaults: {
    netWorth: 0.0,
    burnRate: 0.0,
    salary: 0,
    age: 25
  }

}

export class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = Profile.all()
  }

  handleChange = (key, event) => {
    let val = parseFloat(event.target.value);
    // probably should union state and profile here,
    // in case there was an update somewhere else?

    this.setState((state,props) => {
      state[key] = val
      Profile.profileSet(key, val)
      return state
    })
  };

  render() {
    const attribs = []
    for (const key in this.state) {
      attribs.push(
        <TextField id={key} label={key} key={key}
              variant="outlined" 
              value={this.state[key]}
             onChange={event => this.handleChange(key, event)} />
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
