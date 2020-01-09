import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import { connect } from 'react-redux';


const Header = props => {
  console.log(props.username);
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem('token');

  const toggle = () => setIsOpen(!isOpen);

  const handleLogOut = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    props.history.push('/login');
  }

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
          <Link to={`/jokes/${props.username}`} className="nav-link">My Jokes</Link>
        </NavItem>
        <NavItem>
          <Link to="/new-joke" className="nav-link">New Joke</Link>
        </NavItem>
      </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#" onClick={handleLogOut}>Log Out</NavLink>
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
    username: state.username
  }
}

export default withRouter(connect(mapStateToProps, {})(Header));
