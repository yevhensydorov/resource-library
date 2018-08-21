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
    const { receiver, categories } = this.props;
    let catList = categories.map((cat, i) => {
      return (
        <NavItem key={i} className="navItem">
          <Link className="link" to={cat}>
            {cat}
          </Link>
        </NavItem>
      );
    });
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand href="/">CYF Library</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {catList}
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
