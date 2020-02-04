// import {compoundMaturity} from '../../equations/compound-interest';
let assert = require('assert')


function errMessage(eqn, args, expectation) {
  return `${eqn.name}(${args}) => ${eqn(...args)}, expects: ${expectation}`
}

function testEquation(eqn, testCases) {
  for (const index in testCases) {
      let values = testCases[index]
      let expectation = values.slice(-1)
      let args = values.slice(0, -1)

      it(errMessage(eqn, args, expectation), function() {
          let result = eqn(...args)
          assert(result === expectation, `${result} <=> ${expectation}` )
      });
  }
}

function compoundMaturity(a, b, c) {
    return 0
}

describe('compound-interest', function() {
  describe('compoundMaturity', function() {
    testEquation(compoundMaturity, [
        [0, 0.5, 1, 0],
        [100, 0.05, 1, 105.12710963760242],
        [100000, 0.07, 7, 163231.62199553792]
    ]);
  });
});
