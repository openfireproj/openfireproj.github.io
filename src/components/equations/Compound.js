import { Equation } from '../../components/Equation';
import {compoundMaturity} from '../../equations/compound-interest';


export class CompoundMaturity extends Equation {
  state = {
    principal: 1000,
    interestRate: 0.5,
  }
  eqn = compoundMaturity;

  graph = 'line'
}
