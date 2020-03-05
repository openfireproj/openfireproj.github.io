const pow = Math.pow


export default class Config {
  static title = "Monthly Payment"
  static description = "The following formula is used to calculate the fixed monthly payment (P) required to fully amortize a `loan` (dollars) over a term of `periods` (months) at a monthly interest `rate` (%)."

  static params = {
    loan: {
      label: "Loan",
      default: 8300,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,      
    },
    periods: {
      label: "Periods (months)",
      default: 360,
      type: "currency",
    },
    rate: {
      label: "Interest Rate (Annual)",
      default: 0.027,
      type: "currency",
    }
  }
  static result = {
    name: 'result',
    label: "Payment",
    type: "text",
  }
  static equation =  ({loan, rate, periods} = {}) => {
      rate = rate/12

      const numer = rate * pow(1+rate, periods)
      const denom = pow(1+rate, periods) - 1
      return loan * (numer/denom)
  }
}
