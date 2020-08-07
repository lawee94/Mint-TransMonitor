import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "react-bootstrap";

export default function Header() {
  return (
    <Fragment>
      <div className="header">
        <Navbar color="faded" bg="light" expand="lg" className="bg-white">
          <NavbarBrand>TransMonitor</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <form className="form-inline my-2 ml-5 my-lg-0">
              <button className="btn" type="submit">
                <img src="./images/search.png" />
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
                  <img src="./images/bell.png" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="user">
                  <div className="d-inline-block mr-2 text-right">
                    <span className="font10 d-block">Hello </span>
                    <span className="font14 ">Olawale Festus</span>
                  </div>
                  <img src="./images/img.png" />
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fragment>
  );
}

{
  /* <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <a className="navbar-brand" href="#">
            TransMonitor
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form className="form-inline my-2 ml-5 my-lg-0">
              <button className="btn" type="submit">
                <FontAwesomeIcon
                  icon={fas.faSearch}
                  size="sm"
                  className="search"
                />
              </button>

              <div className="form-group">
                <input
                  type="search"
                  className="form-control-plaintext"
                  placeholder="Search"
                />
              </div>
            </form>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Support <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={far.faBell} size="lg" className="" />
                  <div className="notification">1</div>
                </a>
              </li>
              <li className="nav-item">
                <div className="text-right d-inline-block mr-3 mt-2">
                  <p className="font10  m-0">Hello </p>
                  <span className="font14 ">Olawale Festus</span>
                </div>
                <FontAwesomeIcon
                  icon={far.faUserCircle}
                  size="lg"
                  className="mt-2 float-right"
                />
              </li>
            </ul>
          </div>
        </nav> */
}
