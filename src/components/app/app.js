import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

import './app.css'

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, id: 1},
    {label: 'Create Awesome React App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];

  return(
    <div className="app overflow-hidden container-fluid">
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </div>
  );
}

export default App;