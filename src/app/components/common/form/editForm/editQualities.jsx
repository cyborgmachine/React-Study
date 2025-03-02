import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const EditQualities = ({ options, onChange, name, label, defaultValue }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === "object"
      ? Object.keys(options).map((optionName) => ({
          label: options[optionName]?.name || "UNKNOWN",
          value: options[optionName]?._id || optionName,
        }))
      : options;

  const handleChange = (selectedOptions) => {
    onChange({ name: name, value: selectedOptions });
  };
  console.log(defaultValue);
  console.log(optionsArray);
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        value={defaultValue}
        options={optionsArray}
        closeMenuOnSelect={false}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

EditQualities.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.array,
};

export default EditQualities;
