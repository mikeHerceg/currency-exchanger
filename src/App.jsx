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
          <div className="container"> 
            <h1>Convert</h1>
            <div className="selection-container d-flex justify-content-between col-8 align-items-center">
              <SelectField onChange={(e)=>setStartCurrency(e.target.value)} name="c-type" optionList={options} />
              <span className="mr-2 ml-2">
              to
              </span>
              <SelectField onChange={(e)=>setEndCurrency(e.target.value)}name="c-new"  optionList={options} />
            </div>
            <input className=" form-control col-12 mt-2" ref={inputRef} placeholder="type here"type="text"/>
            <button class="btn btn-primary mt-2" onClick={()=>convert()}>Convert Value</button>
            <h1>{outPut}</h1>    
      
          </div>
        
        </Route>
      </Switch>   
    </Router>
  );
};

export default App;


/*TODO
-base text input
-select field
-basic error handling
-get API
*/