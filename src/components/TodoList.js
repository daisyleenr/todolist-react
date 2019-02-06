import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onCheck, onRemove }) => {
  const todoList = todos.map(todo => (
    <TodoItem
      id={todo.id}
      key={todo.id}
      checked={todo.checked}
      text={todo.text}
      onCheck={onCheck}
      onRemove={onRemove}
    />
  ));

  return todoList;
};

export default TodoList;
