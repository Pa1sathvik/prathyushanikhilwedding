import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { skills } from '../pages/skills/skills-data';

const ImageGallery = () => {
  return (
    <Row>
      {skills.imagesGallery.map((image) => (
        <Col key={image.src}>
          <Image src={image.src} alt={image.alt} />
        </Col>
      ))}
    </Row>
  );
};

export default ImageGallery;