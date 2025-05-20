import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponents = () => {
  return (
    <div className="footer ">
      <Container>
        <Row className="py-3">
          <Col className="d-flex align-items-start justify-content-center my-3 " md={3}>
            <img
              src="../src/assets/img/SMAN_11_SEMARANG.png"
              alt=""
              className="d-inline-block text-center"
              height={30}
              width={30}
            />
            <h5 className="fw-bold text-center mt-1" >SMAN 11 Semarang</h5>
          </Col>
          <Col className="my-3">
            <h5 className="fw-bold">Kontak Kami</h5>
            <div className="ig mb-1 mt-2">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-square-instagram" />
                <p className="m-0">sman11semarang.official</p>
              </Link>
            </div>
            <div className="mail mb-1 mt-1">
              <Link className="text-decoration-none">
                <i className="fa-solid fa-envelope" />
                <p className="m-0">sma11_smg@yahoo.co.id</p>
              </Link>
            </div>
            <div className="phone mb-1 mt-1">
              <Link className="text-decoration-none">
                <i className="fa-solid fa-phone" />
                <p className="m-0">024-8413670</p>
              </Link>
            </div>
          </Col>
          <Col  className="my-3" md={6}>
            <h5 className=" fw-bold">Alamat</h5>
            <div>
              <p>Jl. Lamper Tengah XIV RT 01 RW 01, Semarang 50248 Indonesia</p>
            </div>
          </Col>
        </Row>
        <Row className="mb-0 pt-0">
          <Col>
          <p className="text-center px-md-0 px-1">&copy; Copyright {new Date().getFullYear()} SMAN 11 Semarang</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponents;
