import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
    };
  }

  handleChange=()=>{}

  render() {
    return (
      <form>
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          name="firstname"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <input
          name="lastname"
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
