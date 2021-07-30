//importing react libraries aswell as react router dom, and all the components
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CurrencyConverter from "./components/CurrencyConverter";
import CardGame from "./components/CardGame";
import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header"

//using react router to display either of the components when they are selected in the dropdown
function App() {
  return (
    <Router>
      <>
        <Header />
        <DropdownMenu />
        <Switch>
          <Route path="/currencyConverter" component={CurrencyConverter} />
          <Route path="/cardGame" component={CardGame} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
