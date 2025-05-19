import React, { useState } from "react";
import {
  Container,
  ListGroup,
  Modal,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

// Data dummy artikel
const articles = [
  {
    id: 1,
    title: "Kegiatan MPLS SMA Negeri 11 Semarang",
    date: "2025-05-10",
    content: "MPLS berlangsung selama 3 hari dengan berbagai kegiatan edukatif dan menyenangkan...",
  },
  {
    id: 2,
    title: "Prestasi Siswa dalam Olimpiade Sains",
    date: "2025-04-22",
    content: "Beberapa siswa berhasil meraih medali emas dalam OSN tingkat kota...",
  },
  {
    id: 3,
    title: "Sosialisasi Kurikulum Merdeka",
    date: "2025-03-15",
    content: "Guru dan orang tua mengikuti sosialisasi untuk memahami pendekatan Kurikulum Merdeka...",
  },
];

const ArtikelComponent = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleShow = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", comment: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Di sini bisa dikirim ke backend / simpan ke state
    console.log("Komentar dikirim:", formData);
    alert("Komentar berhasil dikirim!");
    handleClose();
  };

  return (
    <Container className="mt-4">
      <h3>Artikel & Berita</h3>
      <ListGroup className="mt-3">
        {articles.map((article) => (
          <ListGroup.Item
            key={article.id}
            action
            onClick={() => handleShow(article)}
          >
            <div className="fw-bold">{article.title}</div>
            <small className="text-muted">Tanggal: {article.date}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedArticle?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-4">{selectedArticle?.content}</p>

          <h5 className="mt-4">Tinggalkan Komentar</h5>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nama Anda"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Anda"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Komentar</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Tulis komentar Anda di sini..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Kirim Komentar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ArtikelComponent;
