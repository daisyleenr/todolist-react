import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
  render() {
    return (
      <form className="CreateForm">
        <input placeholder="오늘 뭐하지..?" />
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default CreateForm;
