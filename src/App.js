import { Component } from "react";
import Counter from "./components/Counter";
import Post from "./components/Post";
import Parent from "./components/Parent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

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
      </div>
    );
  }
}

export default App;
