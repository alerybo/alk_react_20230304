import { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
