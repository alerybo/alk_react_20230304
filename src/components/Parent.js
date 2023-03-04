import { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = { count: 0 };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <Child
          handleIncrement={this.handleIncrement}
          count={this.state.count}
        />
      </div>
    );
  }
}

export default Parent;
