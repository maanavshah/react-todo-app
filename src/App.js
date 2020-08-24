import React, { Component } from 'react';
import './App.css';

import TodosData from './data/TodosData'
import TodoItem from './components/TodoItem'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: TodosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
        return {todos: updatedTodos}
    })
  }

  render() {
    const todosItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div>
        {todosItem}
      </div>
    )
  }
}

export default App;
