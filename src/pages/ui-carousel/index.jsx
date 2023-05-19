import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class UiCarousel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Carousel slider example 
                        </Card.Header>
                        <Card.Body>

                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/assets/img/gallery/1.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/assets/img/gallery/2.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/assets/img/gallery/3.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>

                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiCarousel;
