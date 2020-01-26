import { Equation, formGet } from '../components/Equation';
import {compoundMaturity} from '../equations/compound-interest';


export class CompoundMaturity extends Equation {
  loadEqn() {
    this.formName = "CompoundMaturity"
    return {
      eqn: compoundMaturity,
      principal: 1000,
      interestRate: 0.5
    }
  }

  updateEqn(form) {
    return {
       eqn: compoundMaturity,
       principal: formGet('principal', form),
       interestRate: formGet('interestRate', form)
    }
  }
}
