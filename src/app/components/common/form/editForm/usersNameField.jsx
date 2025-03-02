import React from "react";
import PropTypes from "prop-types";

const UsersNameField = ({ label, name, onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  const getInputClasses = () => {
    return "form-control";
  };
  return (
    <div className="mb-4 ">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={"text"}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        />
      </div>
    </div>
  );
};

export default UsersNameField;
