import React, { Component } from 'react';
import Home from "./pages/Home.js"
import Html from "./pages/Html.js"
import Css from "./pages/Css.js"
import JavaScript from "./pages/JavaScript.js"
import Nodejs from "./pages/Node.js"
import Reactjs from "./pages/React.js"
import Sql from "./pages/Sql.js"
import MangoDB from "./pages/MangoDB.js"


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
export default class App extends React.Component {

// class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/html' component={Html} exact />
            <Route path='/css' component={Css} exact />
            <Route path='/javascript' component={JavaScript} exact />
            <Route path='/node' component={Nodejs} exact />
            <Route path='/react' component={Reactjs} exact />
            <Route path='/mangodb' component={MangoDB} exact />
            <Route path='/sql' component={Sql} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;