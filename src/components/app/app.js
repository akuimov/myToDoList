import React, { Component } from 'react';
import AddItemForm from '../add-item-form';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list'; 

import './app.css'

export default class App extends Component{
  maxId = 0;
  state = {
    todoData: [
      this.createItem('Drink Coffee'),
      this.createItem('Create Awesome React App'),
      this.createItem('Have a lunch'),
    ]
  } 
  
  createItem(label) {
    return {
      label,
      importnt: false, 
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.filter((el) => el.id !== id)
      }
    })
  }
  addItem = (text) => {
    this.setState(({todoData}) => {
      const item = this.createItem(text);
      return {
        todoData: [...todoData, item]
      }
    })
  }
  toggleDone = (id) => {
    console.log('Done', id)
  }
  toggleImportant = (id) => {
    console.log('Important', id)
  }

  render() {
    return(
    <div className="app overflow-hidden container-fluid">
      <AppHeader />
      <SearchPanel />
      <TodoList 
        todos={this.state.todoData} 
        onDeleted={this.deleteItem}
        onToggleDone={this.toggleDone}
        onToggleImportant={this.toggleImportant}
        />
      <AddItemForm onAddItem={this.addItem}/>
    </div>
  )
  }
  
}
