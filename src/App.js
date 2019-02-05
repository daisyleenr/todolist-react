import React, { Component } from 'react';
import CreateFrom from './components/CreateForm';
import TodoList from './components/TodoList';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateFrom />
        <div className="white-box">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
