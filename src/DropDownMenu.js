import React from "react";

export default class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(
      {
        select: e.target.value
      },
      this.props.open(true, e.target.value)
    );
  }

  render() {
    return (
      <div>
        <select
          className="drop-down"
          value={this.props.select}
          onChange={this.handleClick}
        >
          <option value="popular">popular</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
    );
  }
}
