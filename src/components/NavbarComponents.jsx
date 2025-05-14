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
        className={changeColor || expanded ? "color-active" : ""}
      >
        <Container className="py-1">
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src="../../public/images/SMAN_11_SEMARANG.ico"
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
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto text-center">
                  {navLinks.map((link) => {
                    return (
                      <div className="nav-link" key={link.id}>
                        <NavLink
                          to={link.path}
                          className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                          }
                          end
                        >
                          {link.text}
                        </NavLink>
                      </div>
                    );
                  })}
                </Nav>
                <div className="text-center">
                  <button
                    className="btn btn-outline-danger rounded-5 ms-3"
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
              <Form inline>
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
                      className="btn btn-outline-danger rounded-5"
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
