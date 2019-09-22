import React, { Component } from 'react';
import './App.css';
import { Connector } from 'mqtt-react';
import { subscribe } from 'mqtt-react';
import Fullscreen from "react-full-screen";

import Button from './components/buttons'
import Header from './components/header'
import MenuContainer from './components/menuContainer'

// Messages are passed on the "data" prop
const MessageList = (props) => (
  <ul>
    {props.data.map( message => <li>{message}</li> )}
  </ul>
);
 
// simple subscription to messages on the "@test/demo" topic
subscribe({
  topic: 'restaurant/buttons'
})(MessageList)

class App extends Component {
  constructor(props) {
    super();
 
    this.state = ({
      isFull: false,
      button: [
        {label:"Back", visibility:true},
        {label:"Ordenar", visibility:true},
        {label:"Llamar mesero", visibility:true},
        {label:"Pagar", visibility:true},
        {label:"Back", visibility:true}
      ],
      page:"Inicioo"
    });
  }
 
  goFull = () => {
    this.setState({ isFull: true });
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
              <div className="AppFS">
                <div className="buttonDiv">
                  <Button text={this.state.button[0].label} css="backButton" visibility={this.state.button[0].visibility}/>
                  <Button text={this.state.button[1].label} css="button" visibility={this.state.button[1].visibility}/>
                  <Button text={this.state.button[2].label} css="button" visibility={this.state.button[2].visibility}/>
                  <Button text={this.state.button[3].label} css="button" visibility={this.state.button[3].visibility}/>
                  <Button text={this.state.button[4].label} css="button" visibility={this.state.button[4].visibility}/>
                </div>
                <div className="menuDiv">
                  <Header text={this.state.page}/>
                  <MenuContainer page={this.state.page} css="menu-box"/>
                </div>
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