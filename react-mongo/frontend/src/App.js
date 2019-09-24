import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Header } from "./global/Header";
import Container from "./component/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Container} />
        </Switch>
      </div>
    );
  }
}

export default App;
