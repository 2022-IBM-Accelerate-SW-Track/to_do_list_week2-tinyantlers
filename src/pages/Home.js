import React, { Component } from "react";
import "../component/AddTodo.js";
import AddTodo from "../component/AddTodo.js";
import "../component/Todos.js";
import Todos from "../component/Todos.js";

class Home extends Component {
  // A default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [
        // { id: 0, content: "TEST" },
        // { id: 1, content: "egg" },
        // { id: 2, content: "water" },
      ],
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addTodo = (todo) => {
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    const currentContent = todo.content;

    function todoExists(todoInput) {
      return todoInput.content === currentContent;
    }
    if (this.state.todos.find(todoExists)) return;

    todo.id = Math.random();
    // An array that contains the current array and the new todo item
    let new_list = [...this.state.todos, todo];
    // Updates the local state with the new array.
    this.setState({
      todos: new_list,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
