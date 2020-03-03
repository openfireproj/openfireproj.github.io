export default class Config {
  static title = "Endurance"
  static description = "How long will your money last"
  static params = [
    {
      name: "principal",
      label: "Principal",
      default: 3000000,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,      
    },
    {
      name: "burnAmount",
      label: "Burn Amount",
      default: 8300,
      type: "currency",
      min: 0,
      max: Number.POSITIVE_INFINITY,      
    },
    {
      name: "burnPeriod",
      label: "Burn Period",
      default: "month",
      type: "select",
      options: {
        "month": 30,
        'year': 365
      }
    }
  ]
  static result = {
    name: "result",
    label: "Years before Broke",
    type: "text"
  }
  static equation = (principal, burnAmount, totalInterest, deposits) => {
    totalInterest = 0.0;
    deposits = 0.0;
    return (principal+totalInterest+deposits)/burnAmount;
  }
}
