/* eslint-disable no-plusplus */
import produce from 'immer';
import styled, { css } from 'styled-components';

import React, { Component } from 'react';
import CreateFrom from './components/CreateForm';
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
  id = 3;

  state = {
    todos: [
//      {
//        id: 0,
//        text: '앵귤러 배우고',
//        checked: true,
//      },
//      {
//        id: 1,
//        text: '리액트 배우고',
//        checked: false,
//      },
//      {
//        id: 2,
//        text: '뷰 배우자',
//        checked: false,
//      },
    ],
  };

  handleCreate = text => {
    this.setState(
      produce(draft => {
        draft.todos.push({
          id: this.id++,
          text,
          checked: false,
        });
      }),
    );
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
        <CreateFrom onSubmit={this.handleCreate} />
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
    fetch("http://localhost:5000/list")
      .then(res => res.json())
      .then(
        (result) => {
        console.log(result);
          this.setState({
            todos: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    console.log('didmount', this.state);
  }
}
export default App;
