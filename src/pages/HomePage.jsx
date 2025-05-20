import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { Pagination } from "swiper/modules";
import { beritaTerbaru, dataSwiperGaleri } from "../data/index";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import ArtikelComponent from "../components/ArtikelComponent";

export default function HomePage() {
  let navigate = useNavigate();

  // new
  const [showModal, setShowModal] = useState(false);
  const [selectedBerita, setSelectedBerita] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    komentar: "",
  });

  const handleOpenModal = (berita) => {
    setSelectedBerita(berita);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBerita(null);
    setFormData({
      nama: "",
      email: "",
      komentar: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Komentar dikirim:", formData);
    alert("Komentar berhasil dikirim!");
    handleCloseModal();
  };

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="9">
              <h1 className="mb-4">
                Selamat Datang di <br />
                SMA NEGERI 11 SEMARANG
              </h1>
              <p className="mb-4 ">
                Mendidik siswa menjadi pribadi TANGGUH: Terampil, Aktif,
                Nasionalis, Genius, Gembira, Unggul, dan Harmonis.
              </p>
              <button
                className="btn btn-success btn-lg rounded-4 me-2 mb-xs-0 mb-2"
                onClick={() => navigate("/profil")}
              >
                Selengkapnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
            {/* <Col lg="3" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col> */}
          </Row>
        </Container>
      </header>

      {/* section berita */}

      <div className="beritanw py-5 w-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-semibold mb-3">Berita Terbaru</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={6}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 50 },
              }}
              modules={[Pagination]}
              className="mySwiper mb-3"
            >
              {beritaTerbaru.map((berita) => (
                <SwiperSlide key={berita.id} className="rounded-top">
                  <Container className="containerslide p-0 rounded-top">
                    <img
                      src={berita.image}
                      alt={berita.title}
                      className="w-100 mb-4 rounded-top"
                    />
                    <div className="mb-4 px-3">
                      <h5>{berita.title}</h5>
                    </div>
                    <div className="mb-2 px-3 pb-5">
                      <button
                        className="btn btn-success rounded-4"
                        onClick={() => handleOpenModal(berita)}
                      >
                        {berita.more}
                      </button>
                    </div>
                  </Container>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
          <Row>
            <Col className="text-center py-3">
              <button
                className="btn btn-success rounded-4 btn-lg"
                onClick={() => navigate("/profil")}
              >
                Berita lainnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>

        {/* Modal */}

        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold fs-4">
              {selectedBerita?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Konten Berita */}
            <p className="mb-4">{selectedBerita?.content}</p>

            {/* Komentar Form */}
            <h5 className="fw-semibold mb-3">Tinggalkan Komentar</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Nama</Form.Label>
                <Form.Control
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="fw-medium">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="fw-medium">Komentar</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="komentar"
                  value={formData.komentar}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Tombol */}
              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  onClick={handleCloseModal}
                  className="me-2"
                >
                  Tutup
                </Button>
                <Button variant="success" type="submit">
                  Kirim Komentar
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      {/* video profile */}
      <div className="section-video w-100 py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-semibold mb-5">Profil Sekolah</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="ratio ratio-16x9">
                <iframe
                  className="rounded-4"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/s_NJDixMgjA?si=ETPsE1hYS8fSSy-Dautoplay=1&mute=1"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* galeri section */}
      <div className="py-5 galeri w-100 ">
        <Container>
          <Row className="mb-3">
            <Col>
              <h1 className="text-center fw-semibold ">Galeri Foto</h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiperGaleri.map((data) => {
                return (
                  <SwiperSlide>
                    <Container className="containergaleri p-0  rounded-3 ">
                      {/* <img
                        src={data.image}
                        className=" w-100 p-0  rounded-3 "
                      ></img> */}
                      <img
                        src={data.image}
                        className="w-100 p-0 rounded-3"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSelectedImage(data.image);
                          setShowImageModal(true);
                        }}
                      />
                    </Container>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Modal
              show={showImageModal}
              onHide={() => setShowImageModal(false)}
              centered
              size="lg"
            >
              <Modal.Header closeButton />
              <Modal.Body className="text-center">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="img-fluid rounded"
                />
              </Modal.Body>
            </Modal>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <button
                className="btn btn-success rounded-4 btn-lg"
                onClick={() => navigate("/galeri")}
              >
                Foto lainnya
                <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* section kalender dan pengumuman */}
      <div className="kalpeng w-100">
        <Container>
          <Row className="py-5 gap-3">
            <Col className=" " md={3}>
              <Row className="my-3">
                <h3 className="text-center fw-semibold ">Agenda</h3>
              </Row>
              <Row>
                <Container className="p-0">
                  <CalendarComponent />
                </Container>
              </Row>
            </Col>
            <Col className="">
              <ArtikelComponent />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
