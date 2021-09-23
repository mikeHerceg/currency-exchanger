// Generated with util/create-component.js

import React, {useState} from "react";
import PropTypes from "prop-types"; 
import styles from "./currency-field.module.scss";
import Label from "../label";
import ErrorMessage from "../error";


const CurrencyField = ({ 
  label,
  errorMessage,
  required,
  name,
  value,
  inputRef,
  ...props
}) => {
  const [fieldVal, setFieldVal] = useState(1)
  const [errorMessageState, setErrorMessageState] = useState(errorMessage)
  
  const validateValue = (value) =>{
    const isNum = /^\d*$/.test(value);
    if(isNum){
      setFieldVal(value)
      setErrorMessageState(null)
      return
    }
    else{
      setErrorMessageState('This field only excepts numbers')
    }
  }
  return (
    <div className='mb-3'>
      {label? 
        <Label label={label} required={required} forInput={name}/>
      :null}
      <div data-testid="currency-field" className={styles['currency-field']+' input-group'}>
        <span className="input-group-text">$</span>
        <input  ref={inputRef} onChange={(e)=>validateValue(e.target.value)}type="text" className="form-control" aria-label={label} value={fieldVal}/>
        <span class="input-group-text">.00</span>
      </div>
      <ErrorMessage message={errorMessageState}/>
    </div>
  ) 
};

export default CurrencyField;

CurrencyField.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.number,
  inputRef: PropTypes.object,
}
