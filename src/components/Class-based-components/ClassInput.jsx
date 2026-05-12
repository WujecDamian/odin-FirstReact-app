import { Component } from "react";
import Count from "./Count.jsx";
import ListElement from "./ListElement.jsx";
class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      count: 0,
      inputVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleDelete(todoToDelete) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo !== todoToDelete),
      count: state.todos.length - 1,
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      count: state.todos.length + 1,
      inputVal: "",
    }));
  }

  componentDidMount() {
    this.setState((state) => ({
      ...state,
      count: state.todos.length,
    }));
  }
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>
          All the tasks! - Task count <Count count={this.state.count}></Count>
        </h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            <ListElement
              todo={todo}
              handleDelete={this.handleDelete}
              key={todo}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
