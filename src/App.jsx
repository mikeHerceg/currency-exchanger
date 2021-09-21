import "./main.scss";
import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const App = () =>{
  return(
    <Router>   
      <Switch>
        <Route path={"/"}>

          <div>
            
            currency type select
            
            to
            currency type Select
          
            ----
            input Value
            ---
            OutPutValue
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