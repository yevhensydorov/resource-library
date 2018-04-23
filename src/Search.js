import React from "react";
import DropDownMenu from "./DropDownMenu";
class Search extends React.Component {
  render() {
    return (
      <form className="search-form" onSubmit={this.props.handleSubmit}>
        <div>
          <input
            type="search"
            value={this.props.search}
            onChange={this.props.handleSearch}
            name="resourceSearch"
            placeholder="Search for resouces... &#xf002;"
            size="30"
          />
        </div>
        <DropDownMenu
          open={this.props.handleOpen}
          select={this.props.select} />
      </form>
    );
  }
}

export default Search;
