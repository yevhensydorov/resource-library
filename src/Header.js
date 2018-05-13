import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import FormModalWindow from "./FormModalWindow";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">CYF Library</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="navItem">
                <Link className="link" to="/">
                  <i className="fa fa-home home-icon" />
                </Link>
              </NavItem>
              <NavItem className="navItem">
                <Link className="link" to="/HTML">
                  HTML
                </Link>
              </NavItem>
              <NavItem className="navItem">
                <Link className="link" to="/CSS">
                  CSS
                </Link>
              </NavItem>
              <NavItem className="navItem">
                <Link className="link" to="/JavaScript">
                  JavaScript
                </Link>
              </NavItem>
              <NavItem className="navItem">
                <Link className="link" to="/NodeJS">
                  Node
                </Link>
              </NavItem>
              <NavItem className="navItem">
                <Link className="link" to="React">
                  React
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="toggle" nav caret>
                  Database
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="sql">SQL</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link to="mangodb">MangoDB</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
              <div className="formModal text-right">
                <FormModalWindow receiverHeader={this.props.receiver} />
              </div>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
