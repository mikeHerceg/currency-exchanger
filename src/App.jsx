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
  
  useEffect(()=>{
    GetExchangeRates('USD').then(data=>setExchangeData(data))
  },[]);
  console.log(exchangeData);
  
  return(
    <Router>   
      <Switch>
        <Route path={"/"}>
          <div>
          Convert
          <SelectField name="c-type" optionList={options} />
          to
          <SelectField name="c-new"  optionList={options} />
          <input ref={inputRef} value="" placeholder="type here"type="text"/>
          <button>Convert Value</button>
          
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