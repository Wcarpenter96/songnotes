import React from "react";
import Home from "./containers/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
      <Router>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          <Route component={Home} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;

