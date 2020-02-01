import { Profile } from '../../Profile';
import { Equation } from '../../components/Equation';

import eqn from '../../equations/endurance';


export class Endurance extends Equation {
  state = {
    principal: Profile['netWorth'] || 100000,
    burnRate:  Profile['burnRate'] || 10
  }
  eqn = eqn.remaining;

  updateEqn(_) {
    _['endurance'] = eqn.endurance(_.principal, _.burnRate);
    return _
  }

  description() {
      return "Expense of principle.";
  }

}

export default Endurance;
