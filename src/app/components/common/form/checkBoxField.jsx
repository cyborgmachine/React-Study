import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const [touched, setTouched] = useState(false);
  const handleChange = () => {
    onChange({ name: name, value: !value });
    setTouched(true);
  };
  const getInputClasses = () => {
    return !touched
      ? "form-check-input"
      : error
      ? "form-check-input is-invalid"
      : "form-check-input";
  };
  console.log("Error license", error);
  return (
    <div className="form-check mb-4">
      <input
        className={getInputClasses()}
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
};
export default CheckBoxField;
