import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = ( { todos } ) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return <li key={id} className="list-group-item"><TodoListItem {...itemProps} /></li>;
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