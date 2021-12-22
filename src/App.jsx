import "./main.scss";
import React, {useRef, useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SelectField from './components/select-field';
import GetExchangeRates from "./services/getExchangeRates";
import Currencies from "./assets/currencies";
import CurrencyField from "./components/currency-field";


export const App = () =>{
  const inputRef = useRef();
  const [outPut, setOutPut] = useState();
  const [exchangeData, setExchangeData] = useState([]);
  const options = Currencies
  const [startCurrency, setStartCurrency] = useState('USD');
  const [endCurrency, setEndCurrency] = useState('USD');
  
  useEffect(()=>{
    GetExchangeRates(startCurrency).then(data=>setExchangeData(data))
  },[startCurrency]);

  const convert = () =>{
    let rate = exchangeData.rates[endCurrency]
    let value = inputRef.current.value
    setOutPut(value * rate)
  }


  return(
    <Router>   
      <Switch>
        <Route path={"/"}>
          <div className="custom-container"> 
            <h1>Convert</h1>
            <div className="selection-container mb-2">
              <SelectField onChange={(e)=>setStartCurrency(e.target.value)} name="c-type" optionList={options} />
              <span className="mr-2 ml-2">
              to
              </span>
              <SelectField onChange={(e)=>setEndCurrency(e.target.value)}name="c-new"  optionList={options} />
            </div>
            <CurrencyField inputRef={inputRef} placeholder="type here"type="text"/>
            <button className="btn btn-primary" onClick={()=>convert()}>Convert Value</button>
            <h1>{outPut}</h1>    
          </div>
        
        </Route>
      </Switch>   
    </Router>
  );
};

export default App;
