import React from 'react';

import TodoListItem from '../todo-list-item';

<<<<<<< HEAD
const TodoList = ( { todos, onDeleted, onToggleDone, onToggleImportant } ) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return <li key={id} className="list-group-item">
            <TodoListItem 
                {...itemProps} 
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}/>
        </li>;
=======
const TodoList = ( { todos, onDeleted } ) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...itemProps} 
                    onDeleted={()=>onDeleted(id)}
                    />
            </li>
        );
>>>>>>> 5accbcba860199f6d19826fd0b9fa79284e64b3e
    })

    return(
        <div className="row gx-3 mt-3">
            <ul className="list-group col">
                {elements}
            </ul>
      </div>
    );
  };

export default TodoList;
