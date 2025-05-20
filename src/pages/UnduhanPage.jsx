import React from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import HeroComponent from '../components/HeroComponent';
import { downloadItems } from "../data/index";
import { useNavigate } from "react-router-dom";


const DownloadPage = () => {
    const handleDownload = (fileUrl) => {
  window.open(fileUrl, "_blank"); // buka di tab baru
};

  return (
    <>
      {/* {" "} */}
      <HeroComponent
        title="Pusat Unduhan"
        description="Unduh dokumen resmi seperti formulir, jadwal, dan informasi akademik lainnya."
      />
      <Container className="pt-3 pb-5">
        <ListGroup>
          {downloadItems.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              <div>
                <h5 className="mb-1">{item.title}</h5>
                <small className="text-muted">{item.description}</small>
              </div>
              <Button variant="success" size="sm" onClick={() => handleDownload(item.link)}>
                Unduh
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
};

export default DownloadPage;
