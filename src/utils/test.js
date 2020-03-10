export const rootProperties = {
  title: "string",
  description: "string",
  params: "object",
  result: "object",
  equation: "function"
};

export const validParamTypes = {
  currency: {
    label: "string",
    default: "number",
    type: "string",
    min: "number",
    max: "number"
  },
  select: {
    label: "string",
    default: "any",
    type: "string",
    options: "object"
  }
}

export const propertyChecker = (obj, expectedPropConfig) => {
  for (const [prop, propType] of Object.entries(expectedPropConfig)) {
    if (propType === "array") {
      expect(Array.isArray(obj[prop]));
    } else {
      expect(typeof obj[prop] === propType)
    }
  }
}

const filterParamsByType = (params, targetType) => {
  const ret = {};
  for (const [paramName, paramConfig] of Object.entries(params)) {
    if (paramConfig.type === targetType) {
      ret[paramName] = paramConfig;
    }
  }
  return ret;
}

export const validateParams = params => {
  // first check that all of the params have valid types
  const validTypes = Object.keys(validParamTypes);
  expect(Object.values(params).every(paramConfig => validTypes.includes(paramConfig.type)));

  // next, bucket each type and validate they they have the required fields
  for (const [validType, validConfig] of Object.entries(validParamTypes)) {
    const filteredParams = filterParamsByType(params, validType);
    propertyChecker(filteredParams, validConfig);
  }
}

