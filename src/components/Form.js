import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  render() {
    return (
      <form>
        <input/>
        <input/>
        <input/>
      </form>
    );
  }
}

export default Form;
