export default class Config {
  static id = "endurance"
  static title = "Endurance"
  static description = "How long will your money last"
  static params = {
    principal: {
      label: "Principal",
      default: 3000000,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,      
    },
    burnAmount: {
      label: "Burn Amount",
      default: 8300,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,      
    },
    burnPeriod: {
      label: "Burn Period",
      default: 30,
      type: "select",
      options: {
        "month": 30,
        'year': 365
      }
    }
  }
  static result = {
    name: "result",
    label: "Years Before Broke",
    type: "text"
  }
  static equation = ({principal, burnAmount, burnPeriod, totalInterest, deposits} = {}) => {
    totalInterest = 0.0;
    deposits = 0.0;
    if (burnPeriod === 30) {
      burnAmount = burnAmount * 12;
    }
    return parseInt((principal+totalInterest+deposits)/burnAmount, 10);
  }
}
