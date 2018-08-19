import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
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
              <NavItem className="navItem">
                <Link className="link" to="/Database">
                  Database
                </Link>
              </NavItem>
              <NavItem className="navItem">
                <Link className="link" to="/Project-Management">
                  Project-Management
                </Link>
              </NavItem>
            </Nav>
            <div className="text-right">
              <FormModalWindow receiverHeader={this.props.receiver} />
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
