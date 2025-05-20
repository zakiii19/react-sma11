import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import HeroComponent from "../components/HeroComponent";
import { ekstrakurikuler} from "../data/index";

const Kegiatan = () => {
  return (
    <div className="kegiatan">
      <HeroComponent
        title="Kegiatan Sekolah"
        description="Kegiatan menarik dan inspiratif yang dilakukan di lingkungan SMA Negeri 11 Semarang."
      />
      <div className=" ekstra">
      <Container className="  my-5">
        <h2 className="text-center mb-4">Kegiatan Ekstrakurikuler</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {ekstrakurikuler.map((ekstra, index) => (
            <Col key={index}>
              <Card className=" h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="fw-bold">{ekstra.nama}</Card.Title>
                  <Card.Text>{ekstra.deskripsi}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Kegiatan;
