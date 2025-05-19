import React from "react";
import { Container } from "react-bootstrap";

const HeroComponent = ({ title, description }) => {
  const heroStyle = {
    background: "linear-gradient(to right,rgb(12, 196, 128),rgb(40, 233, 114))",
    padding: "5rem 0 0 0",
    color: "white",
    borderBottom: "4px solid #81c784",
  };

  return (
    <section style={heroStyle}>
      <Container className="px-4 text-start">
        <h1 className="fw-bold mb-3">{title}</h1>
        <p style={{ maxWidth: "700px", fontSize: "1.1rem" }}>
          {description}
        </p>
      </Container>
    </section>
  );
};

export default HeroComponent;



