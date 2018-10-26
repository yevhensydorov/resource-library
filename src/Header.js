import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import FormModalWindow from "./FormModalWindow";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.dropDownToggle = this.dropDownToggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  dropDownToggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    const { receiver, categories } = this.props;
    let dropDownItems = [];
    const catList = categories.map((cat, i) => {
      if (i <= 5) {
        return (
          <NavItem key={i} className="navItem">
            <Link className="link" to={cat}>
              {cat}
            </Link>
          </NavItem>
        );
      } else {
        dropDownItems.push(cat);
      }
    });
    const dropdownList = (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropDownToggle}>
        <DropdownToggle caret>More</DropdownToggle>
        <DropdownMenu>
          {dropDownItems.map((item, num) => {
            return (
              <DropdownItem key={num}>
                <NavItem className="navItem">
                  <Link className="link" to={item}>
                    {item}
                  </Link>
                </NavItem>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    );
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">CYF Library</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {catList}
              {dropdownList}
            </Nav>
            <div className="text-right">
              <FormModalWindow receiverHeader={receiver} />
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
