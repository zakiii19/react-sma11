// import React from 'react'
// import NavbarComponents from '../components/NavbarComponents'

// function UnduhanPage() {
//   return (
//     <div>
//       UnduhanPage</div>
//   )
// }

// export default UnduhanPage

import React from 'react';
import { Container, ListGroup, Button, Row, Col } from 'react-bootstrap';
import HeroComponent from '../components/HeroComponent';

const downloadItems = [
  {
    id: 1,
    title: "Kalender Akademik 2024/2025",
    description: "File PDF berisi kalender akademik terbaru.",
    url: "/downloads/kalender-akademik-2024.pdf",
  },
  {
    id: 2,
    title: "Formulir Pendaftaran Siswa Baru",
    description: "Formulir resmi untuk pendaftaran siswa.",
    url: "/downloads/formulir-ppdb.docx",
  },
  {
    id: 3,
    title: "Jadwal Ujian Semester Ganjil",
    description: "Jadwal ujian terbaru untuk seluruh kelas.",
    url: "/downloads/jadwal-ujian.pdf",
  },
];

const DownloadList = () => {
  return (
    <>
    <HeroComponent
    title="Pusat Unduhan"
  description="Unduh dokumen resmi seperti formulir, jadwal, dan informasi akademik lainnya."
/>
    <Container className="mt-4">
      <h3 className="mb-4">Halaman Unduhan</h3>
      <ListGroup>
        {downloadItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <Row className="align-items-center">
              <Col md={8}>
                <h5>{item.title}</h5>
                <p className="mb-1 text-muted">{item.description}</p>
              </Col>
              <Col md={4} className="text-md-end text-start">
                <Button
                  variant="primary"
                  href={item.url}
                  download
                >
                  Unduh
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
    </>
  );
};

export default DownloadList;
