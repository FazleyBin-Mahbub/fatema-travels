import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, Stack, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import image from "../../images/logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  const navStyle = {
    textDecoration: "none",
    color: "white",
    font: "montserrat",
    fontSize: "17px",
  };
  return (
    <Navbar className="p-2 nav-bg" fixed="top">
      <Container>
        <Link to="/home">
          <img className="w-25" src={image} alt="" />
        </Link>
      </Container>
      {/* navbar links  */}
      <Nav className="me-5">
        <Stack direction="horizontal" gap={4}>
          <div className="home-btn">
            <NavLink style={navStyle} to="/home">
              Home
            </NavLink>
          </div>
          <NavLink style={navStyle} to="/myorders">
            MyOrders
          </NavLink>

          <NavLink style={navStyle} to="/about">
            About
          </NavLink>
          <NavLink style={navStyle} to="/contact">
            Contact
          </NavLink>
          {user.email ? (
            <Button onClick={logout} variant="danger">
              LogOut
            </Button>
          ) : (
            <NavLink style={navStyle} to="/login">
              Login/Registration
            </NavLink>
          )}
          <Navbar.Text className="text-muted ps-3">
            Welcome: <strong>{user.displayName}</strong>
          </Navbar.Text>
        </Stack>
      </Nav>
    </Navbar>
  );
};

export default Header;
