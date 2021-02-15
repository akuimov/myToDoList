import React, { Component } from "react";

export default class AddItemForm extends Component {
    render() {
       return (
            <div className="row gx-3 mt-3">
                <div className="col-12">
                    <button className="btn btn-outline-secondary" onClick={() =>this.props.onAddItem('hi')}>Add Item</button>
                </div>
            </div>
        )
    }
    
}
