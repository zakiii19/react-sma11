import React, { useState } from "react";
import {
  Carousel,
  Card,
  Button,
  Modal,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ArtikelComponent from "../components/ArtikelComponent";
import HeroComponent from "../components/HeroComponent";
import { beritaTerbaru } from "../data/index";

const BeritaPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [comment, setComment] = useState({
    name: "",
    email: "",
    text: "",
  });

  const handleShow = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedNews(null);
    setComment({ name: "", email: "", text: "" });
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = () => {
    alert(
      `Komentar terkirim!\nNama: ${comment.name}\nEmail: ${comment.email}\nKomentar: ${comment.text}`
    );
    handleClose();
  };

  return (
    // <div className='berita-page pt-0'>
    <>
      <HeroComponent
        title="Berita Terbaru"
        description="Ikuti kabar terbaru, pengumuman penting, dan informasi terkini seputar sekolah kami."
      />
      <Container className="pt-5">
       {/* news card */}
        <Row className=" mt-4">
          {beritaTerbaru.map((berita) => (
            <Col key={berita.id} md={4} className="mb-4">
              <Card className=" h-100 border-0 shadow-sm rounded-3">
                <Card.Img
                  variant="top"
                  src={berita.image}
                  className="rounded-top-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-semibold fs-6">
                      {berita.title}
                    </Card.Title>
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="success"
                      className="rounded-3 px-3 py-1 fw-medium"
                      onClick={() => handleShow(berita)}
                    >
                      Selengkapnya
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* News Modal */}
        <Modal
          show={showModal}
          onHide={handleClose}
          size="lg"
          dialogClassName="custom-modal-top"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedNews?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="mb-4">{selectedNews?.content}</p>
            <h5 className="mt-4">Tinggalkan Komentar</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={comment.name}
                  onChange={handleCommentChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={comment.email}
                  onChange={handleCommentChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Komentar</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="text"
                  value={comment.text}
                  onChange={handleCommentChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Tutup
            </Button>
            <Button variant="success" onClick={handleCommentSubmit}>
              Kirim Komentar
            </Button>
          </Modal.Footer>
        </Modal>
        <ArtikelComponent />
      </Container>
    </>
    // </div>
  );
};

export default BeritaPage;
