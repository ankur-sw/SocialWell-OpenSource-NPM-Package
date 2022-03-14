import React from "react";
import PropTypes from "prop-types";

import "./input.css";

/**
 * Primary UI component for user interaction
 */
// export const Input = (props) => {
//   const { size = "medium", ...rest } = props;

//   return <input className={`input ${size}`} {...rest} />;
// };

// Helper
const handleChange =
  ({ onChange }) =>
  () => {
    onChange();
  };

/**
 * Primary UI component for user interaction
 */
export const Input = ({ type, value, placeholder, onChange, isDisabled }) => {
  return (
    <input
      className={`input`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange({ onChange })}
      isDisabled={isDisabled}
    />
  );
};

// prop types
Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

// default props
Input.defaultProps = {
  value: "",
  type: "text",
  placeholder: "",
  onChange: () => {},
  isDisabled: false,
};
