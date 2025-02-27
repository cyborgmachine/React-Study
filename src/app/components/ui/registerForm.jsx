import { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";
import CheckBoxField from "../common/form/checkBoxField";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "male",
    qualities: [],
    license: false,
  });
  const [qualities, setQualities] = useState({});
  const [errors, setErrors] = useState({});
  const [professions, setProfession] = useState([]);

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);
  console.log(qualities);
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
    profession: {
      isRequired: {
        message: "Please select your profession",
      },
    },
    license: {
      isRequired: {
        message:
          "You cannot use our service without confirming the license agreement",
      },
    },
  };
  const isValid = Object.keys(errors).length === 0;
  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    validate();
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
  console.log(errors);
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
        <SelectField
          label="Select your profession"
          onChange={handleChange}
          name="profession"
          options={professions || []}
          defaultOption="Select..."
          error={errors.profession}
          value={data.profession}
        />
        <RadioField
          options={[
            { name: "Male", value: "male" },
            { name: "Female", value: "female" },
            { name: "Other", value: "other" },
          ]}
          value={data.sex}
          name="sex"
          onChange={handleChange}
          label="Select your gender"
        />
        <MultiSelectField
          options={qualities}
          onChange={handleChange}
          name="qualities"
          label="Select your qualities"
          defaultValue={data.qualities}
        />
        <CheckBoxField
          value={data.license}
          onChange={handleChange}
          name="license"
          error={errors.license}
        >
          Confirm <Link>the license agreement</Link>
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

export default RegisterForm;
