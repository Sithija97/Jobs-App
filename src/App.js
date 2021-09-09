import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router";
import Header from "./components/header.jsx";
import BMI from "./components/bmi.jsx";
import WI from "./components/wi";
import Home from "./components/home";
import { Footer } from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/bmi" component={BMI}></Route>
        <Route path="/wi" component={WI}></Route>
        <Route path="/home" component={Home}></Route>
        <Redirect from="/" exact to="/home"></Redirect>
      </Switch>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
