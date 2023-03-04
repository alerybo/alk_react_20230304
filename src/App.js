import { Component } from "react";
import Counter from "./components/Counter";
import Post from "./components/Post";
import Parent from "./components/Parent";
import Form from "./components/Form";

class App extends Component {
  state = {
    post: {},
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ post: data });
      });
  }

  render() {
    return (
      <div>
        <Counter />
        <Post post={this.state.post} />
        <Parent />
        <Form />
      </div>
    );
  }
}

export default App;
