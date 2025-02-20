export function validator(data, config) {
  const errors = {};
  function validate(ValidateMethod, data, config) {
    let statusValidate;
    switch (ValidateMethod) {
      case "isRequired":
        statusValidate = data.trim() === "";
        break;
      case "isEmail": {
        const emailReqExp = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailReqExp.test(data);
        break;
      }
      case "isCapitalSymbol": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }
      case "isContainDigit": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(data);
        break;
      }
      case "min": {
        statusValidate = data.length < config.value;
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }

  for (const fieldName in data) {
    for (const ValidateMethod in config[fieldName]) {
      const error = validate(
        ValidateMethod,
        data[fieldName],
        config[fieldName][ValidateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
