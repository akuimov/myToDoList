import React from 'react';
import StatusFilter from '../status-filter';

const SearchPanel = () => {
    return (
        <div className="row gx-3">
            <input placeholder="search" className="form-control col" />
            <StatusFilter />
        </div>
    );
};

export default SearchPanel;