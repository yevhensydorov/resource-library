import React, { Component } from "react";
import Category from "./Category";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { resources: [] };
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:category" component={Category} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
