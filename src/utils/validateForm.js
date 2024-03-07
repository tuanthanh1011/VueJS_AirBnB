const requiredValidators = {
  email: { fieldName: "Email", error: "" },
  phone: { fieldName: "Phone", error: "" },
  name: { fieldName: "Name", error: "" },
  password: { fieldName: "Password", error: "" },
  rePassword: { fieldName: "Repeat Password", error: "" },
};

const regexValidators = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  phone: /^\d+$/,
};

export const validateAllCaseFromField = (fieldName, value) => {
  if (!requiredValidators[fieldName]) {
    throw new Error(`Validator for field '${fieldName}' is not defined`);
  }

  if (!value) {
    return `${requiredValidators[fieldName].fieldName} is required`;
  }

  if (regexValidators[fieldName] && !regexValidators[fieldName].test(value)) {
    return `Invalid ${requiredValidators[fieldName].fieldName} format`;
  }

  return "";
};
