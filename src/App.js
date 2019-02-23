/* eslint-disable no-plusplus */
import produce from 'immer';
import styled, { css } from 'styled-components';
import axios from 'axios';
import qs from 'qs';

import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';

const Background = styled.div`
  width: 600px;
  margin: 0 auto;
  margin-top: 3rem;

  ${props =>
    props.shadow &&
    css`
      box-shadow: 0px 20px 150px #809baf;
    `};
`;

const Header = styled.div`
  background: ${props => props.color || 'red'}
  color: white;
  padding: 2rem;
`;

const H1 = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 300;
`;

const WhiteBox = styled.div`
  background: white;
  padding: 2rem;
  min-height: 8rem;
  max-height: 25rem;
  overflow-y: auto;
`;

class App extends Component {
  state = {
    todos: [],
  };

  handleCreate = text => {
    let body = {
        text: text, check: false
    }
    axios.post('http://localhost:5000/todo', qs.stringify(body))
      .then(response => {
        console.log(response);
        this.setState(
          produce(draft => {
            draft.todos.push(response.data);
          }),
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log('handleCreate', this.state);
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
    console.log('render', this.state);
    const { todos } = this.state;

    return (
      <Background shadow>
        <Header color="#3bc9db">
          <H1>오늘 뭐할까?</H1>
        </Header>
        <CreateForm onSubmit={this.handleCreate} />
        <WhiteBox>
          <TodoList
            todos={todos}
            onCheck={this.handleCheck}
            onRemove={this.handleRemove}
          />
        </WhiteBox>
      </Background>
    );
  }

  componentDidMount() {
      axios.get('http://localhost:5000/todos')
      .then(response => {
        // handle success
        console.log(response);
          this.setState({
            todos: response.data
          });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    console.log('didmount', this.state);
  }
}
export default App;
