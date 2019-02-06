/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './TodoItem.css';

const TodoItem = ({ checked, text, id, onCheck, onRemove }) => (
  <div
    className={`TodoItem ${checked && 'active'}`}
    onClick={() => onCheck(id)}
  >
    <div className="check">&#10004;</div>
    <div className="text">{text}</div>
    <div
      className="remove"
      onClick={e => {
        e.stopPropagation(); // 최상위 DOM의 onClick 이벤트 전달 방지
        onRemove(id);
      }}
    >
      [지우기]
    </div>
  </div>
);

export default TodoItem;
