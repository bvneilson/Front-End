import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Link to="/" className="navbar-brand">Dad Jokes</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="rightNav ml-auto" navbar>
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

export default Header;
