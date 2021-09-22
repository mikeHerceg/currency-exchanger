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
  const [endCurrency, setEndCurrency] = useState('EUR');
  
  useEffect(()=>{
    GetExchangeRates(startCurrency).then(data=>setExchangeData(data))
  },[startCurrency]);
  console.log(exchangeData);
  
  const convert = () =>{
    let rate = exchangeData.rates[endCurrency]
    let value = inputRef.current.value
    setOutPut(value * rate)
  }


  return(
    <Router>   
      <Switch>
        <Route path={"/"}>
          <div>
          Convert
          <SelectField onChange={(e)=>setStartCurrency(e.target.value)} name="c-type" optionList={options} />
          to
          <SelectField onChange={(e)=>setEndCurrency(e.target.value)}name="c-new"  optionList={options} />
          <input ref={inputRef} placeholder="type here"type="text"/>
          <button onClick={()=>convert()}>Convert Value</button>
          {outPut}            
      
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