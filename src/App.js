import React, { Component } from 'react'
import TodoList from './components/todo/todoList/TodoList';
import Filter from './components/filter/Filter';
import TodoEditor from './components/todoEditor/TodoEditor';

export default class App extends Component {
  state={
    todos: [
      { "id": "id-1", "text": "Вивчити основи React", "completed": false },
      { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
      { "id": "id-3", "text": "Пережити Redux", "completed": false }
    ], 
    filter: "",
  };

  componentDidMount() {
    const storageData = localStorage.getItem("todos")
    const parsedStorageData = JSON.parse.storageData
    if (parsedStorageData) {
      this.setState({
        todos: parsedStorageData
      })
    }
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  }
  // changeCheckBox = (e) => {
  //   const {checked, value, name, type} = e.target;
  //   this.setState((prev) => ({

  //   }))

  // };

  change = () => {
    this.setState({
      completed: !this.state.completed,
    })
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
      <TodoList data={filterByNamee} deleteTodo={this.deleteTodo} change={this.change}/>
      <Filter filter={this.plusFilter} filterValue={this.state.filter}/>
      <TodoEditor addTodo={this.addTodo}/>
      </>
     
    )
  }
}

