/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './CreateForm.css';

class CreateForm extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = e => {
    const { input } = this.state;
    const { onSubmit } = this.props;

    e.preventDefault(); // 새로고침 방지

    onSubmit(input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;

    return (
      <form className="CreateForm" onSubmit={this.handleSubmit}>
        <input
          placeholder="오늘 뭐하지..?"
          onChange={this.handleChange}
          value={input}
        />
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default CreateForm;
