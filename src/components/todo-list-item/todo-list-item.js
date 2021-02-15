import React, { Component }from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
<<<<<<< HEAD

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
=======
    state = {
        done: false,
        important: false,
    }

    onLabelClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
>>>>>>> 5accbcba860199f6d19826fd0b9fa79284e64b3e
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
