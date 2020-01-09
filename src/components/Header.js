import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';
import { connect } from 'react-redux';


const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem('token');

  const toggle = () => setIsOpen(!isOpen);

  if (!token) {
    return (
      <Navbar color="light" light expand="md">
        <Link to="/" className="navbar-brand">Dad Jokes</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/login" className="nav-link">Log In</Link>
            </NavItem>
            <NavItem>
              <Link to="/signup" className="nav-link">Sign Up</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

  return (
    <Navbar color="light" light expand="md">
      <Link to="/" className="navbar-brand">Dad Jokes</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <Link to="/my-jokes" className="nav-link">My Jokes</Link>
        </NavItem>
        <NavItem>
          <Link to="/new-joke" className="nav-link">New Joke</Link>
        </NavItem>
      </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/signup" className="nav-link">Log Out</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

const mapStateToProps = state => {
  //console.log(state);
  if (!state) {
    return{};
  }
  return {
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, {})(Header);
