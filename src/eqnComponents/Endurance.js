import { Profile } from '../Profile';
import { Equation, formGet } from '../components/Equation';

import eqn from '../equations/endurance';


export class Endurance extends Equation {
  loadEqn() {
    this.formName = "Endurance" //TODO get from classname?
    var _ = {
       eqn: eqn.remaining,
       principal:  Profile.getS('netWorth'),
       burnRate: Profile.getS('burnRate')
    }

    return _
  }

  updateEqn(form) {
    var _ = {
       eqn: eqn.remaining,
       principal: formGet('principal', form),
       burnRate: formGet('burnRate', form)
    }
    _['endurance'] = eqn.endurance(_.principal, _.burnRate);

    return _
  }

  description() {
      return "Expense of principle. ";
  }

}

export default Endurance;
