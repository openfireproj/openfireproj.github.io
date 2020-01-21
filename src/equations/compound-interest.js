let pow = Math.pow

/** @function compoundInterest
    @param principal original sum of money
    @param interestRate interest rate
    @param periods
    @param compoundsPerPeriod (optional, defaults: 1) number of times interest is compounded per period.

    @returns amount

*/
const compoundInterest =
(
  principal,
  interestRate,
  periods,
  compoundsPerPeriod
  ) => {
    return principal*pow(1+(interestRate/compoundsPerPeriod), compoundsPerPeriod*periods);
};

const compoundInterestWithMonthlyContributions = 
(
  principal,
  monthlyContributions,
  annualInterestRate,
  compoundsPerYear,
  numberOfYears
  ) => {
    const totalContrubutions = monthlyContributions * numberOfYears * 12;
    const principalAfterInterest = principal * Math.pow(1+((annualInterestRate/100)/compoundsPerYear),compoundsPerYear*numberOfYears);
    const contributationsAfterInterest = monthlyContributions*((Math.pow((1+((annualInterestRate/100)/compoundsPerYear)),(compoundsPerYear*numberOfYears))-1)/((annualInterestRate/100)/compoundsPerYear));
    const futureValue = principalAfterInterest + contributationsAfterInterest;
    return {
      futureValue,
      totalContrubutions,
      interestOnPrincipal: principalAfterInterest - principal,
      interestOnContributions: contributationsAfterInterest - totalContrubutions,
      totalInterest: ((((principalAfterInterest-principal)+(contributationsAfterInterest-totalContrubutions))/futureValue)*100)
    }
};

console.log(compoundInterestWithMonthlyContributions(10000, 100, 5, 12, 10));
