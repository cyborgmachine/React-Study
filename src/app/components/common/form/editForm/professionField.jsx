import React from "react";

const ProfessionField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  name,
}) => {
  const handleChange = ({ target }) => {
    const selectedOption = options.find(
      (option) => option._id === target.value
    );
    onChange({ name: target.name, value: selectedOption });
  };

  const getInputClasses = () => {
    return "form-select";
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value._id}
        onChange={handleChange}
      >
        <option disabled>{defaultOption}</option>
        {options &&
          options.map((option) => (
            <option value={option._id} key={option._id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ProfessionField;
