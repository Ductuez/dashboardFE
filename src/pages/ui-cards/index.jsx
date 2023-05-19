import React from 'react';
import "./index.scss";
import { Row,Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class UiCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <div className="card collapsed">
                        <Card.Header>
                        Card Default
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </div>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Card Primary
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header className="card-success">
                        Card Success
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <div className="card-header card-info">
                        Card Info
                        </div>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <div className="card-header  card-warning">
                        Card warning
                        </div>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <div className="card-header  card-danger">
                        Card danger
                        </div>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <div className="card-header  card-indigo">
                        Card Indigo
                        </div>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <div className="card ">
                        <div className="card-header card-teal">
                        Card Teal
                        </div>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <div className="card ">
                        <Card.Header>
                        <div className="float-right">
                            <Link to="#be" className="btn btn-info btn-xs btn-border btn-rounded">Action 1</Link>
                            <Link to="#be" className="btn btn-danger btn-xs btn-border btn-rounded">Action 2</Link>
                        </div>
                        Card With action buttons
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </div>
                    </Col>
                    <Col md="6">
                    <div className="card ">
                        <Card.Header>
                        <div className="float-right">
                            <div className="btn-group">
                            <button type="button" className="btn btn-info btn-rounded btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Action <span className="caret" /></button>
                            <ul className="dropdown-menu card-dropdown" role="menu">
                                <li><Link to="#be">Action</Link></li>
                                <li><Link to="#be">Another action</Link></li>
                                <li><Link to="#be">Something else here</Link></li>
                                <li className="divider" />
                                <li><Link to="#be">Separated link</Link></li>
                            </ul>
                            </div>
                        </div>
                        Card With Dropdown
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <div className="card ">
                        <Card.Header>
                        <Row>
                            <Col md="6">
                            Card with search form
                            </Col>
                            <Col md="6">
                            <div className="card-search">
                                <form action="#">                                      
                                <Form.Control  type="text"  placeholder="Search something..." name="s" />                                          
                                <span className="fa fa-search" />                                                                               
                                </form>
                            </div>
                            </Col>
                        </Row>
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                    </div>
                    </Col>
                    <Col md="6">
                    <div className="card ">
                        <Card.Header>                           
                        Card with Footer                        
                        </Card.Header>
                        <Card.Body>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </Card.Body>
                        <Card.Footer>
                        This is standard card footer
                        </Card.Footer>
                    </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiCards;
