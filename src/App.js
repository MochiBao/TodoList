import React, { Component } from 'react'
import TodoList from './components/todo/todoList/TodoList';
import Filter from './components/filter/Filter';
import TodoEditor from './components/todoEditor/TodoEditor';

export default class App extends Component {
  state={
    todos: [
      { "id": "id-1", "text": "Вивчити основи React", "completed": true },
      { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
      { "id": "id-3", "text": "Пережити Redux", "completed": false }
    ], 
    filter: "",
  };

  addTodo = (newTodo) => {
    this.setState((prev) => ({
      todos: [...prev.todos, newTodo]
    }))
  }

  plusFilter = (e) => {
    const {value} = e.target;
    console.log(value);
    this.setState({filter:value})
  };

  filterByName = () => {
    const {todos, filter } = this.state;
    const filterTodos = todos.filter((todo) => {
      
        return todo.text.toLowerCase().includes(filter.toLowerCase()); 
      
    });
    console.log(filterTodos);
    return filterTodos;
  };

  deleteTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter((todo) => {
        return todo.id !== id
      })
    }))
  }

  render() {
    const filterByNamee = this.filterByName();
    return (
      <> 
      <TodoList data={filterByNamee} deleteTodo={this.deleteTodo}/>
      <Filter filter={this.plusFilter} filterValue={this.state.filter}/>
      <TodoEditor addTodo={this.addTodo}/>
      </>
     
    )
  }
}

