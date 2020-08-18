import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {

  state = {
    todos: [
      { id: 1, content: 'complete project on time' },
      { id: 2, content: 'I have to learn React' }
    ]
  }

  deleteTodos = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's </h1>
        <Todos todos={this.state.todos} deleteTodos={this.deleteTodos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );

  }


}

export default App;
