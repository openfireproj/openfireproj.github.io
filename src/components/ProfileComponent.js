import React from 'react';
import {Profile} from '../Profile';
import MoneyInput from '../components/inputs/Money';

export class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = Profile.all()
  }

  handleChange = (key, value) => {
    let val = parseFloat(value);
    // probably should union state and profile here,
    // in case there was an update somewhere else?

    this.setState((state,props) => {
      state[key] = val
      Profile.set(key, val)
      Profile[key] = val
      return state
    })
  };

  render() {
    const attribs = []
    for (const key in this.state) {
      attribs.push(
        <MoneyInput id={key} 
            label={key}
            key={key}
            fieldKey={key}
            value={this.state[key]}
            onChange={this.handleChange} />
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

export default ProfileComponent
