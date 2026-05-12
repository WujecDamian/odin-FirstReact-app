import { Component } from "react";

class ListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      inputVal: this.props.todo,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  toggleEdit() {
    if (this.state.editMode === false) {
      //if in editMode
      //
      this.setState((state) => ({
        ...state,
        editMode: true,
      }));
      return <input type="text"></input>;
    } else {
      //if NOT in editMode

      //
      this.setState((state) => ({
        ...state,
        editMode: false,
      }));
    }
  }
  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  render() {
    if (!this.state.editMode) {
      return (
        <li>
          <span>{this.state.inputVal}</span>
          <button
            onClick={() => {
              this.props.handleDelete(this.props.todo);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              this.toggleEdit(this.props.todo);
            }}
          >
            {this.state.editMode ? "Resubmit" : "Edit"}
          </button>
        </li>
      );
    } else {
      return (
        <li key={this.props.todo}>
          <input
            type="text"
            name="input_list"
            id="input_list"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button
            onClick={() => {
              this.props.handleDelete(this.props.todo);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              this.toggleEdit(this.props.todo);
            }}
          >
            {this.state.editMode ? "Resubmit" : "Edit"}
          </button>
        </li>
      );
    }
  }
}

export default ListElement;
