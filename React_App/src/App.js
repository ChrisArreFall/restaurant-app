import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Fullscreen from "react-full-screen";

import { subscribe , Connector } from 'mqtt-react';


import _MainContainer from './mqtt/MainContainer';
import { Header } from "./global/Header"


const MainContainer = subscribe({topic: 'restaurant/buttons'})(_MainContainer);

class App extends Component {
  constructor(props) {
    super();
 
    this.state = ({
      isFull: false
    });
  }
 
  goFull = () => {
    this.setState({ isFull: true });
  }

  setPage = (newPage) => {
    this.setState({ page: newPage });
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.goFull}>
          Go Fullscreen
        </button>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({isFull})}
        >
          <div className="fullscreen-enabled">
            <Connector mqttProps="ws://192.168.43.121:15220/">
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={MainContainer} />
                </Switch>
              </div>
            </Connector>
          </div>
        </Fullscreen>
      </div>
    );
  }
}
//<MessageList/>

export default App;