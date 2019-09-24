import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';
import { socket } from '../global/Header';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      food_data: []
    };
  }

  getData = menu => {
    console.log(menu);
    menu = menu.map(food => {
      food.order = 0;
      return food;
    });
    this.setState({ food_data: menu });
  };

  componentDidMount() {
    console.log("component mounted!")
    socket.emit("initial_data");
    var state_current = this;
    socket.on("get_data", state_current.getData);
  }

  componentWillUnmount() {
    socket.off("get_data", this.getData);
  }

  makeAction() {
      return 0;
  }

  // To get the initial data
  getFoodData() {
    return this.state.food_data.map(food => {
      return (
        <tr key={food._id}>
          <td> {food.name} </td>
          <td>
            <input
              value={food.category}
              type="number"
              placeholder="Quantity"
            />
          </td>
          <td>
            <button onClick={this.makeAction}>Order</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Container>
        <h2 className="h2Class">Order Menu</h2>
        <Table striped>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>{this.getFoodData()}</tbody>
        </Table>
      </Container>
    );
  }
}
export default Menu;