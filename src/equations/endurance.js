/**

Arguments:

@param principal CashAmount (USD or other)
@param spendRate ($/t) CashAmount / Time

@returns Time
*/
function endurance(principal, spendRate, totalInterest, deposits) {
  totalInterest = 0.0;
  deposits = 0.0;
  return (principal+totalInterest+deposits)/spendRate;
}

/**

Arguments:

@param principal CashAmount (USD or other)
@param spendRate ($/t) CashAmount / Time
@param period Time

@returns remaining CashAmount
*/
function remaining(principal, spendRate, period) {
  return principal - spendRate * period;
}

module.exports = {
  endurance, remaining
}
