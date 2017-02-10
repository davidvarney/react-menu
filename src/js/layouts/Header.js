// Library
import React from "react";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
// XHR
import { getCategories } from "../xhr";

let Header = React.createClass({
  getInitialState() {
    return {
      categories: []
    }
  },

  componentDidMount() {
    getCategories().then(response => {
      this.setState({
        categories: response.data
      });
    });
  },

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'} className="navbar-brand">React Menu</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1} title="Menu" id="basic-nav-dropdown">
              {
                this.state.categories.map(category => {
                  return (
                    <MenuItem key={'category-menu-item-' + category.id} eventKey={'1.' + category.id} href={'/category/' + category.id}>{category.name}</MenuItem>
                  );
                })
              }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});

export default Header
