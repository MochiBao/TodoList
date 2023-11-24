import React, { Component } from 'react'

export default class TodoEditor extends Component {
    state = {
        textValue: "",
    };

    inputValue = (e) => {
        const value = e.target.value;
        console.log(value);
        this.setState({textValue: value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            "id": "id-5", "text": this.state.textValue, "completed": false,
        };
        this.props.addTodo(newTodo)
    }
  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <input onChange={this.inputValue} value={this.state.textValue}/>
        <button type="submit">Create</button>
      </form>
    )
  }
}
