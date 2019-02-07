/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo !== this.props.todo;
  }

  render() {
    const { checked, text, id, onCheck, onRemove } = this.props;
    return (
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
  }
}

export default TodoItem;
