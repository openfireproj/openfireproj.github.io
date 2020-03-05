export default class ParamConfig {
  static getConfig(config) {
    for (const [key, val] of Object.entries(config)) {
      if (typeof(val) == 'number') {
        config[key] = {
          label: key,
          default: val,
          type: "currency",
          min: 0,
          max: Number.POSITIVE_INFINITY,      
        }
      }
    }

    return config
  }

}
