import React from 'react';

const AppHeader = () => {
	return (
		<div className="row gx-3 align-items-center">
			<h1 className="col">My Todo List</h1>
			<span className="col-4 form-text">1 more to do, 3 done</span>
		</div>
	);
};

export default AppHeader;