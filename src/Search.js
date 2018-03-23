import React from 'react';

class Search extends React.Component {
	render() {
		return (
			<form>
				<input
				 type="text"
				 placeholder='Search for Resource'
				 name='resourceSearch'
				/>
			</form>
		);
	}
}

export default Search;