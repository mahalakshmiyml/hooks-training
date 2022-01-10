import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Image, Row } from "react-bootstrap";

const UseEffect = () => {
  const [images, setimages] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        console.log(response.data);
        setimages(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(images)
  return (
    <div>
      <Container>
        <Row>
          {images.map((image) => (
            <Col md={4} key={image.id}>
              <Card>
                <h2>{image.title}</h2>
                <Image
                  src={image.thumbnailUrl}
                  alt={image.title}
                  className="img-fluid"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default UseEffect;
