import React, { Component } from 'react';
import Home from "./pages/Home.js"
import Html from "./pages/Html.js"
import Css from "./pages/Css.js"
import JavaScript from "./pages/JavaScript.js"
import Node from "./pages/Node.js"
import Reactjs from "./pages/React.js"
import Sql from "./pages/Sql.js"
// import MangoDB from "./pages/MangoDB.js"


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/html' component={Html} exact />
            <Route path='/css' component={Css} exact />
            <Route path='/javascript' component={JavaScript} exact />
            <Route path='/node' component={Node} exact />
            <Route path='/react' component={Reactjs} exact />
            <Route path='/sql' component={Sql} exact />
            {/* <Route path='/mangodb' component={MongoDB} exact /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
