import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  AddTodoHandle = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  HandleSubmit = (e) => {
    const { addTodo } = this.props;
    e.preventDefault();
    this.props.addTodo(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <label>Add new Todo:</label>
          <input type="text" onChange={this.AddTodoHandle} />
        </form>
      </div>
    );
  }
}

export default AddTodo;
