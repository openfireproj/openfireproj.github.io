import Config from './monthly-payment';

import { 
  propertyChecker,
  rootProperties,
  validParamTypes,
  validateParams
} from '../../utils/test'

describe('monthly-payment', () => {
  it("includes the required properties", () => {
    propertyChecker(Config, rootProperties);
  });

  it("has the expected title", () => {
    expect(Config.title).toEqual("Monthly Payment");
  });

  it("has the expected description", () => {
    expect(Config.description).toEqual(
      "Calculate the fixed monthly payment required to fully amortize a loan over a term of periods (months) at a monthly interest rate (%)."
      );
  });

  it("has valid params", () => {
    validateParams(Config.params);
  });

  it("has loan, periods, and rate params", () => {
    expect(Object.keys(Config.params)).toEqual(['loan', 'periods', 'rate']);
  });

  it("only has currency param types", () => {
    expect(Object.values(Config.params).every(paramConfig => paramConfig.type === "currency"));
  });

  it("returns the expected result from the equation", () => {
    // 350k 15 year @ 3.7%
    expect(Config.equation({ loan: 350000, rate: 0.037, periods: 180})).toEqual(2537);
    // 800k 30 year @ 3.92%
    expect(Config.equation({ loan: 800000, rate: 0.0392, periods: 360})).toEqual(3783);
  });

  it("uses the default loan if input is invalid", () => {    
    expect(Config.equation({ rate: 0.037, periods: 180})).toEqual(6015);
  });

  it("converts loan to absolute value if input is less than min", () => {    
    expect(Config.equation({ loan: -500000, rate: 0.037, periods: 180})).toEqual(3624);
  });

  it("uses the default periods if input is invalid", () => {    
    expect(Config.equation({ loan: 800000, rate: 0.0392 })).toEqual(3783);
  });

  it("converts periods to absolute value if input is less than min", () => {    
    expect(Config.equation({ loan: 350000, rate: 0.037, periods: -180 })).toEqual(2537);
  });

  it("uses the default rate if input is invalid", () => {    
    expect(Config.equation({ loan: 350000, periods: 180})).toEqual(2537);
  });

  it("converts periods to absolute value if input is less than min", () => {    
    expect(Config.equation({ loan: 800000, rate: -0.0392, periods: 360 })).toEqual(3783);
  });
});
