import React from 'react';
import "./index.scss";
import { Row, Col, Card,Media, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class AppChat extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col md="12">
                    <Card>
                    <Card.Header>
                        Chat Room
                    </Card.Header>
                    <Card.Body className="no-padding">
                        <Row>
                        <Col md="4">
                            <div className="chat-contacts padding-20">
                            <ul className="list-unstyled sidebar-contact-list">
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-success circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-1.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>John Doe</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-success circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-2.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Gevinda Doe</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-danger circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-3.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Eluga Smith</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-danger circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-4.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Hritik Doe</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-success circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-5.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Bianca</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-success circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-1.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>John Doe</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-success circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-2.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Gevinda Doe</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-danger circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-3.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Eluga Smith</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-danger circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-4.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Hritik Doe</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                                <Media as="li" className="clearfix">
                                <Link to="#be" className="media-box">
                                    <span className="float-right">
                                    <span className="circle circle-success circle-lg" />
                                    </span>
                                    <span className="float-left">
                                    <img src="/assets/img/avtar-5.png" alt="user" className="media-box-object rounded-circle" width={50} />
                                    </span>
                                    <span className="media-box-body">
                                    <span className="media-box-heading">
                                        <strong>Bianca</strong>
                                        <br />
                                        <small className="text-muted">Designer</small>
                                    </span>
                                    </span>
                                </Link>
                                </Media>
                            </ul>
                            </div>
                        </Col>
                        <Col md="8">
                            <div className="chat-room padding-20">
                            <ul className="chat-list list-unstyled">
                                <li className="clearfix chat-element media">
                                <Link to="#be" className="float-left">
                                    <img src="/assets/img/avtar-2.png" alt="" className="rounded-circle" />
                                </Link>
                                <div className="media-body ">
                                    <div className="speech-box">
                                    <small className="float-right text-primary">1m ago</small>
                                    <strong>John Doe</strong>
                                    <p className="margin-b-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </p>
                                    <small className="text-info">Today 18:45 - 06.09.2018</small>
                                    </div>
                                </div>
                                </li>
                                <li className="clearfix chat-element right media">
                                <div className="media-body text-right float-left">
                                    <div className="speech-box">
                                    <strong className="float-left">John Doe</strong>
                                    <small className="text-right text-primary">1m ago</small>
                                    <p className="margin-b-0 text-left">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </p>
                                    <small className="text-info">Today 18:45 - 06.09.2018</small>
                                    </div>
                                </div>
                                <Link to="#be" className="float-right">
                                    <img src="/assets/img/avtar-2.png" alt="" className="rounded-circle" />
                                </Link>
                                </li>
                                <li className="clearfix chat-element media">
                                <Link to="#be" className="float-left">
                                    <img src="/assets/img/avtar-2.png" alt="" className="rounded-circle" />
                                </Link>
                                <div className="media-body ">
                                    <div className="speech-box">
                                    <small className="float-right text-primary">1m ago</small>
                                    <strong>John Doe</strong>
                                    <p className="margin-b-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </p>
                                    <small className="text-info">Today 18:45 - 06.09.2018</small>
                                    </div>
                                </div>
                                </li>
                                <li className="clearfix chat-element media">
                                <Link to="#be" className="float-left">
                                    <img src="/assets/img/avtar-2.png" alt="" className="rounded-circle" />
                                </Link>
                                <div className="media-body ">
                                    <div className="speech-box">
                                    <small className="float-right text-primary">1m ago</small>
                                    <strong>John Doe</strong>
                                    <p className="margin-b-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </p>
                                    <small className="text-info">Today 18:45 - 06.09.2018</small>
                                    </div>
                                </div>
                                </li>
                                <li className="clearfix chat-element right media active">
                                <div className="media-body text-right float-left">
                                    <div className="speech-box">
                                    <strong className="float-left">John Doe</strong>
                                    <small className="text-right text-primary">1m ago</small>
                                    <p className="margin-b-0 text-left">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </p>
                                    <small className="text-info">Today 18:45 - 06.09.2018</small>
                                    </div>
                                </div>
                                <Link to="#be" className="float-right">
                                    <img src="/assets/img/avtar-2.png" alt="" className="rounded-circle" />
                                </Link>
                                </li>
                                <li className="clearfix chat-element media">
                                <Link to="#be" className="float-left">
                                    <img src="/assets/img/avtar-2.png" alt="" className="rounded-circle" />
                                </Link>
                                <div className="media-body ">
                                    <div className="speech-box">
                                    <small className="float-right text-primary">1m ago</small>
                                    <strong>John Doe</strong>
                                    <p className="margin-b-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                    </p>
                                    <small className="text-info">Today 18:45 - 06.09.2018</small>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <InputGroup>
                        <Form.Control  type="text"  placeholder="Type your message here..." />
                        <span className="input-group-btn">
                            <button className="btn btn-primary"><i className="fa fa-send" /></button>
                        </span>
                        </InputGroup>
                    </Card.Footer>
                    </Card>
                </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default AppChat;
