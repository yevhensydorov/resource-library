import React from "react";

export default class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
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
    let message = "You selected " + this.props.select;
    return (
      <div>
        <select className="drop-down" value={this.props.select} onChange={this.handleClick}>
          <option value="popular">popular</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
        <p>{message}</p>
      </div>
    );
  }
}
