// Generated with util/create-component.js

import React from "react";
import Label from "../label";
import ErrorMessage from "../error";
import PropTypes from "prop-types"; 
//import styles from "./select-field.module.scss";



const SelectField = ({ 
  label,
  required,
  optionList,
  errorMessage,
  ...props
}) => {
  return (
    <div {...props}>
      {label? 
        <Label label={label} required={required} forInput={name}/>
      :null}
      <select name={name} className='form-control'>
        {
          optionList.map((option)=>{
            return(
              <option key={option.value} value={option.value}>{option.description}</option>
            );
          })
        }
      </select>
      <ErrorMessage message={errorMessage}/>
    </div>
  ); 
};

export default SelectField;

SelectField.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  optionList: PropTypes.array,
  required: PropTypes.bool
};
