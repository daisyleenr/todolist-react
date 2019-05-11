/* eslint-disable react/sort-comp */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
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
  border-radius: 10px;
  background-color: white;

  ${props =>
    props.shadow &&
    css`
      box-shadow: 0px 1px 50px #0000006b;
    `};
`;

const Header = styled.div`
  background: white;
  color: ${props => props.color || 'red'};
`;

const H1 = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
`;

const WhiteBox = styled.div`
  background: white;
  padding: 2rem;
  min-height: 8rem;
  max-height: 27rem;
  overflow-y: auto;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

class App extends Component {
  state = {
    todos: [],
  };

  handleCreate = text => {
    console.log(process.env.REACT_APP_API_ADDR);
    const body = {
      text,
      check: false,
    };
    axios
      .post(`${process.env.REACT_APP_API_ADDR}/todos`, qs.stringify(body))
      .then(response => {
        console.log(response);
        this.setState(
          produce(draft => {
            draft.todos = response.data;
          }),
        );
      })
      .catch(function(error) {
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

    axios
      .put(`${process.env.REACT_APP_API_ADDR}/todos/${id}`)
      .then(response => {
        console.log(response);
        this.setState(
          produce(draft => {
            draft.todos = response.data;
          }),
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleRemove = id => {
    // const { todos } = this.state;
    // const nextTodos = todos.filter(todo => todo.id !== id);
    // this.setState({ todos: nextTodos });

    axios
      .delete(`${process.env.REACT_APP_API_ADDR}/todos/${id}`)
      .then(response => {
        console.log(response);
        this.setState(
          produce(draft => {
            draft.todos = response.data;
          }),
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log('render', this.state);
    const { todos } = this.state;

    return (
      <Background shadow>
        <CreateForm onSubmit={this.handleCreate} />
        <Header color="#fd3355">
          <H1>Todo List</H1>
        </Header>
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
    axios
      .get(`${process.env.REACT_APP_API_ADDR}/todos`)
      .then(response => {
        // handle success
        console.log(response);
        this.setState({
          todos: response.data,
        });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });

    console.log('didmount', this.state);
  }
}
export default App;
