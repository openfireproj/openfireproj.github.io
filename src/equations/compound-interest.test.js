import Config from './compound-interest';

describe('compound-interest', () => {

  it("returns the expected result from the equation", () => {
    expect(Config.equation({ principal: 1000.0, rate: 0.00, periods: 10})).toEqual(1000);
    expect(Config.equation({ principal: 1000.0, rate: 0.05, periods: 1.0})).toEqual(1050);
    expect(Config.equation({ principal: 1000.0, rate: 0.029, periods: 10.0})).toEqual(1336.427488025472);
  });

});
