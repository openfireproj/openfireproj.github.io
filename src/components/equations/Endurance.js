import { Profile } from '../../Profile';
import { Equation } from '../../components/Equation';

import eqn from '../../equations/endurance';


export class Endurance extends Equation {
  eqn = eqn.remaining;
  state = {
    principal:  Profile.getS('netWorth'),
    burnRate: Profile.getS('burnRate')
  }

  updateEqn(_) {
    _['endurance'] = eqn.endurance(_.principal, _.burnRate);

    return _
  }

  description() {
      return "Expense of principle. ";
  }

}

export default Endurance;
