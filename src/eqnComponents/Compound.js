import { Equation, formGet } from '../components/Equation';
import {compoundMaturity} from '../equations/compound-interest';


export class CompoundMaturity extends Equation {
  formName = 'CompoundMaturity'
  eqn = compoundMaturity;
  state = {
    principal: 1000,
    interestRate: 0.5
  }

  updateEqn(form) {
    return {
       principal: formGet('principal', form),
       interestRate: formGet('interestRate', form)
    }
  }
}
