import React from 'react';
import "./index.scss";
import { Row, Col, Card, Form } from 'react-bootstrap';


class UiCardMaster extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Card Master
                        </Card.Header>
                        <Card.Body>
                        <Col md="12">
                            <div className="card-wrapper" />
                            <div className="form-container active">
                            <Form id="card-master">
                                <Form.Group>
                                <input placeholder="Card number" type="tel" name="number" className="form-control" />
                                </Form.Group>
                                <Form.Group>
                                <input placeholder="Full name" type="text" name="name" className="form-control" />
                                </Form.Group>
                                <Form.Group>
                                <Row>
                                    <Col md="6">
                                    <input placeholder="MM/YY" type="tel" name="expiry" className="form-control" />
                                    </Col>
                                    <Col md="6">
                                    <input placeholder="CVC" type="number" name="cvc" className="form-control" />
                                    </Col>
                                </Row>
                                </Form.Group>
                                <button className="btn col-md-12 btn-primary">Submit</button>
                            </Form>
                            </div>
                        </Col>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiCardMaster;
