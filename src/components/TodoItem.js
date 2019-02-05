import React from 'react';
import './TodoItem.css';

const TodoItem = () => (
  <div className="TodoItem">
    <div className="check">&#10004;</div>
    <div className="text">내용</div>
    <div className="remove">[지우기]</div>
  </div>
);

export default TodoItem;
