const pow = Math.pow
const exp = Math.exp

export default class Config {
  static title = "Compound Interest"
  static description = "Standard PeRT Equation."

  static params = {
    principal: {
      label: "Principal",
      default: 1000,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,      
    },
    periods: {
      label: "Periods",
      default: 10,
      type: "currency",
    },
    rate: {
      label: "Interest Rate (Annual)",
      default: 0.029,
      type: "currency",
    }
  }
  static result = {
    name: 'result',
    label: "Payment",
    type: "currency",
  }
  static equation =  ({principal, rate, periods} = {}) => {
      return principal * exp(rate*periods);
  }

}

export const compoundInterestWithMonthlyContributions = 
(
  principal,
  monthlyContributions,
  annualInterestRate,
  compoundsPerYear,
  numberOfYears
  ) => {
    const totalContrubutions = monthlyContributions * numberOfYears * 12;
    const principalAfterInterest = principal * pow(1+((annualInterestRate/100)/compoundsPerYear),compoundsPerYear*numberOfYears);
    const contributationsAfterInterest = monthlyContributions*((pow((1+((annualInterestRate/100)/compoundsPerYear)),(compoundsPerYear*numberOfYears))-1)/((annualInterestRate/100)/compoundsPerYear));
    const futureValue = principalAfterInterest + contributationsAfterInterest;
    return {
      futureValue,
      totalContrubutions,
      interestOnPrincipal: principalAfterInterest - principal,
      interestOnContributions: contributationsAfterInterest - totalContrubutions,
      totalInterest: ((((principalAfterInterest-principal)+(contributationsAfterInterest-totalContrubutions))/futureValue)*100)
    }
};
