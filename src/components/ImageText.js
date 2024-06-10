import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
function ImageText({ imageUrl, heading, text }) {
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col xs={12} md={4} className='heading_text' >
          <Image src={imageUrl} alt={heading} fluid />
        </Col>
        <Col xs={12} md={8}>
          <h2 className="display-7 font-weight-bold">{heading}</h2>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageText;
