/**
 * This equation was sourced from https://www.mtgprofessor.com/calculators.htm
 */

export default class Config {
  static id = "monthly-payment"
  static title = "Monthly Payment"
  static description = "Calculate the fixed monthly payment required to fully amortize a loan over a term of periods (months) at a monthly interest rate (%)."

  static params = {
    loan: {
      label: "Loan",
      default: 830000,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,      
    },
    periods: {
      label: "Periods (months)",
      default: 360,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,
    },
    rate: {
      label: "Interest Rate (Annual)",
      default: 0.037,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,
    }
  }
  static result = {
    name: 'result',
    label: "Payment",
    type: "text",
  }
  static equation = ({loan, rate, periods} = {}) => {
    if (!loan || loan > this.params.loan.max) {
      loan = this.params.loan.default;
    } else if (loan < this.params.loan.min) {
      loan = Math.abs(loan);
    }    
    
    if (!periods || periods > this.params.periods.max) {
      periods = this.params.periods.default;
    } else if (periods < this.params.periods.min) {
      periods = Math.abs(periods);
    }

    if (!rate || rate > this.params.rate.max) {
      rate = this.params.rate.default;
    } else if (rate < this.params.rate.min) {
      rate = Math.abs(rate);
    }
    
    rate = rate/12
    const numer = rate * Math.pow(1+rate, periods)
    const denom = Math.pow(1+rate, periods) - 1
    return Math.round(loan * (numer/denom))
  }
}
