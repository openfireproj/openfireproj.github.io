import React from 'react';

import MoneyInput from '../components/inputs/Money';

export default class Demo extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      money: 200.00
    };
  }

  onChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    const { money } = this.state;
    return (
      <div>
        <MoneyInput
          currencySymbol="$"
          label="Amount"
          fieldKey="money"
          onChange={this.onChange}
          value={money}
        />
      </div>
    );
  }
}
