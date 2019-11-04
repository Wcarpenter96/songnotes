import React from "react";
import Home from "./containers/Home";
import Song from "./containers/Song";
import Scrape from "./containers/Scrape";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
      <Router>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/scrape" component={Scrape} />
          <Route exact path="/songs/:id" component={Song} />
          <Route component={Home} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;

