import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <form className='search-form' >
        <div>
          <input
            type='search'
            value={this.props.search}
            onChange={this.props.handleSearch}
            name='resourceSearch'
            placeholder='Search for resouces...'
            size='30'
          />
          <button type='search'>
            <i className='fa fa-search' />
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
