// Generated with util/create-component.js

import React from "react";
import PropTypes from "prop-types"; 
import styles from "./label.module.scss";


const Label = ({ 
  label,
  required,
  forInput,
  ...props
}) => {
  return (
    <label 
      {...props}
      data-testid="label" 
      className={styles['label']}
      htmlFor={forInput}
      aria-label={label}
    >
      {label}
      {required ?<span className={styles['required-dot']}></span>: null }
    </label>
  ); 
};

export default Label;

Label.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  forInput: PropTypes.string,
};
