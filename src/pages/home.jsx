import { Card, Container, Row, Col } from "react-bootstrap";
import Pizza from "../assets/pizza1.avif"; 
import { Link } from 'react-router-dom';

import "./home.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

function Home() {
  return (
    <div className="home-page justify-content-evenly">
      <div className="introduction d-flex">
      <Container className="my-5 justify-content-center" >
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="shadow pizza-card border-0">
              <Card.Img
                variant="top"
                src={Pizza}
                className="card-img-top pizza-img"
              />
              <Card.Body className="text-center bg-black text-white">
                <Card.Title className="fw-bold fs-4">Pepperoni Pizza</Card.Title>
                <Card.Text className="fw-bold">
                  Try our delicious handcrafted pizzas!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className="about text-light py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col xs={12} md={10} lg={8}>
              <h2 className="mb-4">ABOUT US</h2>
              <p className="lead para fst-italic text-start">
                Welcome to <strong>SLICE & SPOON</strong>, your local haven for
                delicious Italian flavors. We're proud to offer a mouthwatering
                selection of handcrafted pizzas, satisfying pasta dishes made
                with quality ingredients, and tempting desserts to complete your
                meal. Come experience the taste of Italy with us!
              </p>
            </Col>
          </Row>
        </Container>
        </div>
        </div>

        {/*carousel*/}
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src={carousel1}
              alt="First slide"
              className="d-block w-100 img-fluid mx-auto"
              style={{ maxWidth: "700px", height: "auto" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              src={carousel2}
              alt="Second slide"
              className="d-block w-100 img-fluid mx-auto"
              style={{ maxWidth: "700px", height: "auto" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={carousel3}
              alt="Third slide"
              className="d-block w-100 img-fluid mx-auto"
              style={{ maxWidth: "700px", height: "auto" }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <br></br>
        <br></br>

        {/*Fan Favourite*/}
        <div className="bestseller container d-flex">
          <div className="bestseller-img row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={carousel1} />
                <Card.Body>
                  <Card.Title>Try Our BestSeller</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button as={Link} to="/menu" variant="primary">
                    Go to Menu Page
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-6">
              <p className="bestseller-para text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum cumque voluptas quod eligendi sit! Ipsum praesentium,
                expedita, modi adipisci ducimus quod dolores libero ratione
                incidunt sint saepe facere natus amet!
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
