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

  render() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <label htmlFor="firstname">First name</label>
        <input
          name="firstname"
          value={this.state.firstname}
          onChange={(e) => this.setState({ firstname: e.target.value })}
        />
        <label htmlFor="lastname">Last name</label>
        <input
          name="lastname"
          value={this.state.lastname}
          onChange={(e) => this.setState({ lastname: e.target.value })}
        />
        <button
          onClick={() =>
            alert(
              this.state.email +
                " " +
                this.state.firstname +
                " " +
                this.state.lastname
            )
          }
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
