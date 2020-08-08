import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "react-bootstrap";

export default function Header() {
  const showMenu = () => {
    document.getElementById("hamburger").classList.toggle("desktopOnly");
  };

  return (
    <Fragment>
      <div className="header">
        <Navbar color="faded" bg="light" expand="lg" className="bg-white">
          <NavbarBrand>
            {" "}
            <img
              src="./images/menu.svg"
              alt=""
              className="mobileOnly float-left mr-3"
              onClick={showMenu}
              width="25"
            />
            TransMonitor
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <form className="form-inline my-2 marl-5 my-lg-0">
              <button className="btn" type="submit">
                <img src="./images/search.png" alt="" />
              </button>
              <div className="form-group">
                <input
                  type="search"
                  className="form-control-plaintext"
                  placeholder="Search"
                />
              </div>
            </form>
            <Nav className="ml-auto ">
              <NavItem>
                <NavLink>Support</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <img src="./images/bell.png" alt="" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="user">
                  <div className="d-inline-block mr-2 text-right">
                    <span className="font10 d-block">Hello </span>
                    <span className="font14 ">Olawale Festus</span>
                  </div>
                  <img src="./images/img.png" alt="" />
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
  );
}
