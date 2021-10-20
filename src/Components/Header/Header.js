import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
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
          <Nav.Link as={Link} to="/home" className="fw-bold h4 text-white">
            <FaPlusCircle size="1.5em" className="text-success" /> MediCare
          </Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-lg-auto text-center ">
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
              <Nav className="text-center">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="text-center">
                <Nav.Link className="text-secondary">
                  {user?.displayName}
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
