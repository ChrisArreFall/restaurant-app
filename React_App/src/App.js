import React, { Component } from 'react';
import './App.css';

import Fullscreen from "react-full-screen";

import { Connector } from 'mqtt-react';
import { subscribe } from 'mqtt-react';


import _MainContainer from './mqtt/MainContainer';


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
            <Connector mqttProps="ws://192.168.100.103:12345/">
              <MainContainer/>
            </Connector>
          </div>
        </Fullscreen>
      </div>
    );
  }
}
//<MessageList/>

export default App;