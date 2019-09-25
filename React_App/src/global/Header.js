import React, { Component } from "react";
import io from "socket.io-client";
import { NavLink } from "react-router-dom";

var socket;
class Header extends Component {
  constructor() {
      super()
      this.state = {
          endpoint: "192.168.43.121:3001"
      };

      socket = io.connect(this.state.endpoint);
  }

  render() {
    return(
      <header>
        <nav>
            <NavLink exact to="/">
                
            </NavLink>
        </nav>
      </header>
    );
  }
}

export { Header, socket };