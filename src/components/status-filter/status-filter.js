import React, { Component } from 'react';

export default class StatusFilter extends Component {
    render() {
        return(
            <div className="btn-group col" role="group">
                <button type="button" className="btn btn-info">Left</button>
                <button type="button" className="btn btn-outline-secondary">Middle</button>
                <button type="button" className="btn btn-outline-secondary">Right</button>
            </div>
        );
    }
}
