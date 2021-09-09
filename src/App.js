import React from "react";
import "./App.css";
import Header from "./components/header.jsx";
import BMI from "./components/bmi.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BMI />
    </React.Fragment>
  );
}

export default App;
