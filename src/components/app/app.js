import React, { Component }from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css'

export default class App extends Component {
  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Create Awesome React App', important: true, id: 2},
      {label: 'Have a lunch', important: false, id: 3}
    ]
  }
    
  onDeleted = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.filter((el) => el.id !== id);
      return {
        todoData: idx
      }
    })
  }

  render() {
    return(
    <div className="app overflow-hidden container-fluid">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={this.state.todoData} onDeleted={this.onDeleted}/>
    </div>
  );
  }
  
}
