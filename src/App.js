import React, { Component } from 'react';
import './App.css';

import TodosData from './data/TodosData'
import TodoItem from './components/TodoItem'

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  render() {
    this.state.todos = TodosData.map(item => <TodoItem key={item.id} item={item} />)

    return (
      <div>
        {this.state.todos}
      </div>
    )
  }
}

export default App;
