import { Profile } from '../../Profile';
import { Equation, formGet } from '../../components/Equation';

import eqn from '../../equations/endurance';


export class Endurance extends Equation {
  formName = "Endurance" //TODO get from classname?
  eqn = eqn.remaining;
  state = {
    principal:  Profile.getS('netWorth'),
    burnRate: Profile.getS('burnRate')
  }

  updateEqn(form) {
    var _ = {
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
