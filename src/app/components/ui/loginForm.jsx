import { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevstate) => ({
      ...prevstate,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    email: {
      isRequired: { message: "Email is required" },
      isEmail: { message: "Incorrect Email" },
    },
    password: {
      isRequired: { message: "Password is required" },
      isCapitalSymbol: {
        message: "Password must contain at least one capital letter",
      },
      isContainDigit: {
        message: "Password must contain at least one digit",
      },
      min: {
        message: "Password must contain minimum 8 symbols",
        value: 8,
      },
    },
  };
  useEffect(() => {
    validate();
  }, [data]);

  const isValid = Object.keys(errors).length === 0;
  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="E-mail:"
          name="email"
          value={data.email || ""}
          onChange={handleChange}
          error={errors.email || ""}
        />
        <TextField
          label="Password:"
          type="password"
          name="password"
          value={data.password || ""}
          onChange={handleChange}
          error={errors.password || ""}
        />
        <CheckBoxField
          value={data.stayOn}
          onChange={handleChange}
          name="stayOn"
        >
          Stay logged in
        </CheckBoxField>
        <button
          type="submit"
          disabled={!isValid}
          className="btn btn-primary w-100 mx-auto"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
