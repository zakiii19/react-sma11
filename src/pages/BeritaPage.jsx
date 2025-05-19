// import React from 'react'
// import NavbarComponents from '../components/NavbarComponents'

// function BeritaPage() {
//   return (
//     <div>
//       BeritaPage</div>
//   )
// }

// export default BeritaPage

import React, { useState } from 'react';
import { Carousel, Card, Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';
import ArtikelComponent from "../components/ArtikelComponent";
import HeroComponent from '../components/HeroComponent';


const newsData = [
  {
    id: 1,
    title: 'Kegiatan Upacara Hari Senin',
    image: '../../public/images/carousel1.png',
    shortDesc: 'Kegiatan rutin setiap hari Senin di sekolah.',
    fullDesc: 'Upacara bendera hari Senin diikuti oleh seluruh siswa dan guru. Kegiatan ini melatih kedisiplinan dan cinta tanah air.',
  },
  {
    id: 2,
    title: 'Lomba Cerdas Cermat',
    image: '../../public/images/carousel1.png',
    shortDesc: 'Prestasi siswa dalam ajang lomba cerdas cermat tingkat kota.',
    fullDesc: 'Tim sekolah berhasil meraih juara 1 lomba cerdas cermat tingkat kota dengan persiapan yang matang. savbkjx cerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjxcerdas cermat tingkat kota dengan persiapan yang matang. savbkjx',
  },
  {
    id: 3,
    title: 'Lomba Cerdas Cermat',
    image: '../../public/images/carousel1.png',
    shortDesc: 'Prestasi siswa dalam ajang lomba cerdas cermat tingkat kota.',
    fullDesc: 'Tim sekolah berhasil meraih juara 1 lomba cerdas cermat tingkat kota dengan persiapan yang matang.',
  },
  {
    id: 4,
    title: 'Lomba Cerdas Cermat',
    image: '../../public/images/carousel1.png',
    shortDesc: 'Prestasi siswa dalam ajang lomba cerdas cermat tingkat kota.',
    fullDesc: 'Tim sekolah berhasil meraih juara 1 lomba cerdas cermat tingkat kota dengan persiapan yang matang.',
  },
  {
    id: 5,
    title: 'Lomba Cerdas Cermat',
    image: '../../public/images/carousel1.png',
    shortDesc: 'Prestasi siswa dalam ajang lomba cerdas cermat tingkat kota.',
    fullDesc: 'Tim sekolah berhasil meraih juara 1 lomba cerdas cermat tingkat kota dengan persiapan yang matang.',
  },
  {
    id: 6,
    title: 'Lomba Cerdas Cermat',
    image: '../../public/images/carousel1.png',
    shortDesc: 'Prestasi siswa dalam ajang lomba cerdas cermat tingkat kota.',
    fullDesc: 'Tim sekolah berhasil meraih juara 1 lomba cerdas cermat tingkat kota dengan persiapan yang matang.',
  },
  // Tambahkan lebih banyak berita jika diperlukan
];

const BeritaPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const [comment, setComment] = useState({
    name: '',
    email: '',
    text: '',
  });

  const handleShow = (news) => {
    setSelectedNews(news);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedNews(null);
    setComment({ name: '', email: '', text: '' });
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment(prev => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = () => {
    alert(`Komentar terkirim!\nNama: ${comment.name}\nEmail: ${comment.email}\nKomentar: ${comment.text}`);
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
      {/* Slider */}
      <header className="w-100 min-vh-100">

      <Carousel className='rounded-2 min-vh-100 w-100'>
        {newsData.map((news) => (
          <Carousel.Item key={news.id}>
            <img className="mt-3 d-block w-100 rounded-2 " src={news.image} alt={news.title} />
            <Carousel.Caption className=" bg-dark bg-opacity-50 p-3 rounded-2">
              <h3>{news.title}</h3>
              <p>{news.shortDesc}</p>
              <Button variant="light" onClick={() => handleShow(news)}>Baca Selengkapnya</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      </header>

      {/* News Cards */}
      <Row className="mt-4">
        {newsData.map((news) => (
          <Col key={news.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={news.image} />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Button variant="primary" onClick={() => handleShow(news)}>Baca Berita</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* News Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" dialogClassName="custom-modal-top">
        <Modal.Header closeButton>
          <Modal.Title>{selectedNews?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedNews?.fullDesc}</p>
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
          <Button variant="secondary" onClick={handleClose}>Tutup</Button>
          <Button variant="success" onClick={handleCommentSubmit}>Kirim Komentar</Button>
        </Modal.Footer>
      </Modal>
      <ArtikelComponent/>
    </Container>
    </>
    // </div>
  );
};

export default BeritaPage;