import { Profile } from '../../Profile';
import { Equation } from '../../components/Equation';

import eqn from '../../equations/endurance';


export class Endurance extends Equation {
  constructor(props) {
    super(props);
    this.state = {
      principal: Profile['netWorth'] || 100000,
      burnRate:  Profile['burnRate'] || 10,
    }
    this.eqn = eqn.remaining;
  }
  
  componentDidMount() {
    this.updateEqn()
  }

  updateEqn() {
    this.setState({
      endurance: eqn.equation(
        this.state.principal,
        this.state.burnRate
      )
    }, () => console.log(this.state))
  }

  description() {
      return "Expense of principle.";
  }

}

export default Endurance;
