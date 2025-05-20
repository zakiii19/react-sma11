// import React from 'react'
// import NavbarComponents from '../components/NavbarComponents'

// function GaleriPage() {
//   return (
//     <div>
//       GaleriPage</div>
//   )
// }

// export default GaleriPage

// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Modal } from 'react-bootstrap';

// const galeriData = [
//   {
//     id: 1,
//     title: 'Upacara Bendera',
//     image: '../../public/images/carousel1.png',
//   },
//   {
//     id: 2,
//     title: 'Lomba 17 Agustus',
//     image: '../../public/images/herokepsek.png',
//   },
//   {
//     id: 3,
//     title: 'Kegiatan Pramuka',
//     image: '../../public/images/carousel1.png',
//   },
//   {
//     id: 4,
//     title: 'Tari Tradisional',
//     image: '../../public/images/herokepsek.png',
//   },
//   {
//     id: 5,
//     title: 'Kunjungan Industri',
//     image: '../../public/images/herokepsek.png',
//   },
//   // Tambahkan lebih banyak data sesuai kebutuhan
// ];

// const GaleriFoto = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleShow = (image) => {
//     setSelectedImage(image);
//     setShowModal(true);
//   };

//   const handleClose = () => {
//     setShowModal(false);
//     setSelectedImage(null);
//   };

//   return (
//     <Container className="py-4">
//       <h2 className="mb-4 text-center">Galeri Kegiatan</h2>
//       <Row>
//         {galeriData.map((item) => (
//           <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
//             <Card onClick={() => handleShow(item)} className="shadow-sm cursor-pointer" style={{ cursor: 'pointer' }}>
//               <Card.Img variant="top" src={item.image} />
//               <Card.Body>
//                 <Card.Title className="text-center">{item.title}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Modal show={showModal} onHide={handleClose} centered size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedImage?.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="text-center">
//           <img
//             src={selectedImage?.image}
//             alt={selectedImage?.title}
//             className="img-fluid rounded"
//           />
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };

// export default GaleriFoto;


import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import { Card, Modal, Container } from 'react-bootstrap';
import HeroComponent from '../components/HeroComponent';
import { galeriItems } from "../data/index";

// import './Galeri.css'; // Untuk efek hover & responsive



const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};

const Galeri = () => {
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShow = (item) => {
    setSelectedImage(item);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedImage(null);
  };

  return (
    <>
    <HeroComponent
    title="Galeri Sekolah"
  description="Lihat koleksi foto dan dokumentasi berbagai momen indah di sekolah."
/>
    <Container className="py-4">
      <h2 className="text-center mb-4">Galeri Foto</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galeriItems.map((item) => (
          <Card key={item.id} className="gallery-card" onClick={() => handleShow(item)}>
            <div className="gallery-img-wrapper">
              <Card.Img src={item.image} alt={item.title} className="gallery-img" />
            </div>
            <Card.Body>
              <Card.Title className="text-center">{item.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Masonry>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className="p-0">
          {selectedImage && (
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </Modal.Body>
      </Modal>
    </Container>
    </>
  );
};

export default Galeri;
