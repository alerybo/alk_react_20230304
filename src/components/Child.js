import { Component } from "react";

class Child extends Component {
  state = {
    post: {},
  };

  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Child;
