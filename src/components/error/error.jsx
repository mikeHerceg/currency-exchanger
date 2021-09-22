// Generated with util/create-component.js

import React from "react";
import PropTypes from "prop-types"; 
import styles from "./error.module.scss";


const ErrorMessage = ({ 
  message,
  ...props
}) => {
  return (
    <span {...props} data-testid="error" className={styles['error']+' text-danger text-small'}>
     {message}
    </span>
  ); 
};

export default ErrorMessage;

Error.propTypes = {
  message:PropTypes.string
};
Error.defaultProps = {
  //add defualt values
};
