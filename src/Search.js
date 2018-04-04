import React from 'react';

class Search extends React.Component {
	render() {
		return (
			<form style={{paddingTop:'12px'}} >
			<div>
			  <input 
			  type="search" 
			  name="resourceSearch"
			  placeholder="Search for resouces..." 
			  size="30"/>
			  <button type='search' ><i className ="fa fa-search"></i></button>
			</div>
		  </form>
		);
	}
}

export default Search;