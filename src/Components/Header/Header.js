import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
  const { user, userSignOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="py-3"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="fw-bold" to="#home">
            MediCare{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {!user?.email ? (
              <Nav>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link className="text-secondary">
                  {user.displayName}
                </Nav.Link>

                <Nav.Link
                  onClick={userSignOut}
                  className="bg-danger rounded-pill px-3"
                >
                  Log Out
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
