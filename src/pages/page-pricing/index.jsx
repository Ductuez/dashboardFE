import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class PagePricing extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="3">
                        <Card  className="price-box">
                            <Card.Header>
                            Basic
                            </Card.Header>
                            <div className="price-amount">
                            <sup>$</sup> 9.99 <sub>/PM</sub>
                            </div>
                            <Card.Body>
                            <ul className="list-unstyled price-features">
                                <li>Lorem ipsum dolor</li>
                                <li>dummy text of the printing</li>
                                <li>Dolor sit amet</li>
                                <li>Printing text of industry</li>
                            </ul>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/auth/register" className="btn btn-border  btn-primary">Sing Up</Link>
                            </Card.Footer>
                        </Card>
                        </Col>
                        <Col md="3">
                        <Card  className="price-box">
                            <div className="card-header card-primary ">
                            Standard
                            </div>
                            <div className="price-amount">
                            <sup>$</sup> 21.99 <sub>/PM</sub>
                            </div>
                            <Card.Body>
                            <ul className="list-unstyled price-features">
                                <li>Lorem ipsum dolor</li>
                                <li>dummy text of the printing</li>
                                <li>Dolor sit amet</li>
                                <li>Printing text of industry</li>
                            </ul>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/auth/register" className="btn btn-border  btn-primary">Sing Up</Link>
                            </Card.Footer>
                        </Card>
                        </Col>
                        <Col md="3">
                        <Card  className="price-box">
                            <Card.Header className="card-success">
                            Professional
                            </Card.Header>
                            <div className="price-amount">
                            <sup>$</sup> 33.99 <sub>/PM</sub>
                            </div>
                            <Card.Body>
                            <ul className="list-unstyled price-features">
                                <li>Lorem ipsum dolor</li>
                                <li>dummy text of the printing</li>
                                <li>Dolor sit amet</li>
                                <li>Printing text of industry</li>
                            </ul>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/auth/register" className="btn btn-border  btn-primary">Sing Up</Link>
                            </Card.Footer>
                        </Card>
                        </Col>
                        <Col md="3">
                        <Card  className="price-box">
                            <Card.Header>
                            Extended
                            </Card.Header>
                            <div className="price-amount">
                            <sup>$</sup> 49.99 <sub>/PM</sub>
                            </div>
                            <Card.Body>
                            <ul className="list-unstyled price-features">
                                <li>Lorem ipsum dolor</li>
                                <li>dummy text of the printing</li>
                                <li>Dolor sit amet</li>
                                <li>Printing text of industry</li>
                            </ul>
                            </Card.Body>
                            <Card.Footer>
                            <Link to="/auth/register" className="btn btn-border  btn-primary">Sing Up</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default PagePricing;
