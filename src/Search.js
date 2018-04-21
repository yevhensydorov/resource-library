import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form className='search-form search' onSubmit={this.props.handleSubmit}>
        <div>
          <span><i className="fa fa-search"></i></span>
          <input
            type='search'
            value={this.props.search}
            onChange={this.props.handleSearch}
            name='resourceSearch'
            placeholder='Search for resouces...'
            size='30'
          />
        </div>
      </form>
    );
  }
}
export default Search;
