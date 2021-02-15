import React, { Component }from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
        let ClassNames = 'row align-items-center todo-list-item';

        if (done) ClassNames += ' done';
        if (important) ClassNames += ' important';

        return (
            <div className={ClassNames}>
                <span 
                    className="col label"
                    onClick={onToggleDone}
                >
                    { label }
                </span>
                <span className="buttons-wrapper col-3 d-flex justify-content-between">
                    <button 
                        className="btn btn-outline-danger"
                        onClick={onDeleted}
                    >
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <button 
                        className="btn btn-outline-success"
                        onClick={onToggleImportant}
                        >
                        <i className="fas fa-exclamation"></i>
                    </button>
                </span>
            </div>
        )
    }
}
