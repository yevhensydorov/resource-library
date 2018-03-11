import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
};

export default SearchBar;
