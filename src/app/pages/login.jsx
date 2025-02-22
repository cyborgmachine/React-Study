import { useEffect, useState } from "react";
import TextField from "../components/login/textField";
import { validator } from "../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
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
        message: "Password must have at least one capital letter",
      },
      isContainDigit: {
        message: "Password must have at least one digit",
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 .offset-md-3 shadow p-4">
            <h3 className="mb-4">Login</h3>
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
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-100 mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
