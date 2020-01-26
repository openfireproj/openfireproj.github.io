export const compoundMaturity = (
  principal,
  interestRate,
  periods
) => {
  // compoundsPerYear

  return principal * Math.exp(interestRate*periods);

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
