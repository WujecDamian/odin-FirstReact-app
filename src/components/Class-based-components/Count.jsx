import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span key={this.props.count}>[ {this.props.count} ]</span>;
  }
}

export default Count;
