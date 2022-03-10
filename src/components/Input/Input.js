import React from "react";

import "./input.css";

/**
 * Primary UI component for user interaction
 */
export const Input = (props) => {
  const { size = "medium", ...rest } = props;

  return <input className={`input ${size}`} {...rest} />;
};
