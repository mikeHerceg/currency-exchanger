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
            Get to Work on your New App!
        </Route>
      </Switch>   
    </Router>
  );
};

export default App;