import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BmiCalculator from "./components/bmiCalculator";
import MainPage from "./components/mainPage";
import WiCalculator from "./components/wiCalculator";
import IdwCalculator from "./components/idwCalculator";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/bmi" component={BmiCalculator} />
            <Route path="/wi" component={WiCalculator} />
            <Route path="/idw" component={IdwCalculator} />
            <Route path="/" component={MainPage} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
