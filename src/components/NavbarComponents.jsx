import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { navLinks } from "../data/index";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../assets/img/SMAN_11_SEMARANG.png";

const NavbarComponents = () => {
  const [show, setShow] = useState(true);

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className={
          changeColor || expanded
            ? "color-active fw-semibold  py-0 my-0 mx-0"
            : " fw-semibold py-0 my-0 mx-0"
        }
      >
        <Container className="container-navbar my-0 py-0 px-0">
          <Navbar.Brand href="#home" className="fs-3 fw-semibold">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src={LogoImage}
                alt=""
                width="40"
                height="40"
                className="d-inline-block align-text-top"
              />
              <span className="me-2">SMAN 11 SEMARANG</span>
            </a>
          </Navbar.Brand>
          {show && (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav " />
              <Navbar.Collapse id="basic-navbar-nav  " className="justify-content-end ">
                <Nav className=" text-center py-0 ">
                  {navLinks.map((link) => {
                    return (
                      <div className="nav-link" key={link.id}>
                        <NavLink
                          to={link.path}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending px-1 py-3 "
                              : isActive
                              ? "active px-1 py-3"
                              : "px-1 py-3"
                          }
                          end
                        >
                          {link.text}
                        </NavLink>
                      </div>
                    );
                  })}
                </Nav>
                <div className="text-center py-2">
                  <button
                    className="btn btn-outline-success rounded-5  text-nowrap"
                    onClick={() => setShow(false)}
                  >
                    <i class="fa fa-search"></i> Search
                  </button>
                </div>
              </Navbar.Collapse>
            </>
          )}
          {!show && (
            <>
              <Form inline className="py-2">
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col xs="auto">
                    <button
                      onClick={() => setShow(true)}
                      className="btn btn-outline-success rounded-5"
                    >
                      Search
                    </button>
                  </Col>
                </Row>
              </Form>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponents;
