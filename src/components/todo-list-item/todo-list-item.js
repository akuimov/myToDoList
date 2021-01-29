import React, { Component }from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
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
        let ClassNames = 'row align-items-center todo-list-item';

        if (done) ClassNames += ' done';
        if (important) ClassNames += ' important';

        return (
            <div className={ClassNames}>
                <span 
                    className="col label"
                    onClick={this.onLabelClick}
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
                        onClick={this.onMarkImportant}
                        >
                        <i className="fas fa-exclamation"></i>
                    </button>
                </span>
            </div>
        )
    }
}
