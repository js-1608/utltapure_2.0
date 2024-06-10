import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import { FaArrowRight } from 'react-icons/fa'; // Using react-icons for the arrow
// import '../App.css'
function Banner({ src, title, text, updated, buttonUrl, buttonText }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={src} alt="Card image" className='home_banner' />
      <Card.ImgOverlay className="d-flex align-items-center justify-content-start">
        <Container>
          <Card.Title className="display-4 font-weight-bold banner_title">{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Card.Text className='banner_title'>{updated}</Card.Text>
          {buttonUrl && (
            <Button variant="light" href={buttonUrl} className='button'>
              {buttonText} <FaArrowRight className='button_image' />
            </Button>
          )}
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Banner;
