/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import CreateFrom from './components/CreateForm';
import TodoList from './components/TodoList';

import './App.css';

class App extends Component {
  id = 3;

  state = {
    todos: [
      {
        id: 0,
        text: '앵귤러 배우고',
        checked: true,
      },
      {
        id: 1,
        text: '리액트 배우고',
        checked: false,
      },
      {
        id: 2,
        text: '뷰 배우자',
        checked: false,
      },
    ],
  };

  handleCreate = text => {
    const { todos } = this.state;
    const todoData = {
      id: this.id++,
      text,
      checked: false,
    };

    this.setState({
      todos: todos.concat(todoData),
    });
  };

  handleCheck = id => {
    // const { todos } = this.state;
    // const nextTodos = todos.map(todo => {
    //   if (todo.id === id) {
    //     return { ...todo, checked: !todo.checked };
    //   }
    //   return todo;
    // });

    // this.setState({ todos: nextTodos });

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    }));
  };

  handleRemove = id => {
    // const { todos } = this.state;
    // const nextTodos = todos.filter(todo => todo.id !== id);
    // this.setState({ todos: nextTodos });

    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateFrom onSubmit={this.handleCreate} />
        <div className="white-box">
          <TodoList
            todos={todos}
            onCheck={this.handleCheck}
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
