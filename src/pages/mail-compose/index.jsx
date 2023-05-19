import React from 'react';
import "./index.scss";
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MailCompose extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="3" className="mailbox-sidenav">
                    <div className="clearfix margin-b-10">
                        <Link to="#be" className="btn btn-danger compose btn-block">
                        <em className="fa fa-pencil" />
                        <span>Compose</span>
                        </Link>
                    </div>
                    <Card>
                        <Card.Body>
                        <ul className="nav nav-pills nav-stacked flex-column">
                            <li className="side-nav-header">
                            <small className="text-muted">Mailbox</small>
                            </li>
                            <li className="nav-item active">
                            <Link className="nav-link" href="#be">
                                <span className="mt-1 badge badge-success float-right">18</span>
                                <em className="fa fa-inbox" />
                                <span>Inbox</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="mt-1 badge badge-success float-right">3</span>
                                <em className="fa fa-star" />
                                <span>Starred</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="mt-1 badge badge-success float-right">5</span>
                                <em className="fa fa-paper-plane-o" />
                                <span>Sent</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="mt-1 badge badge-success float-right">8</span>
                                <em className="fa fa-edit" />
                                <span>Draft</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="mt-1 badge badge-success float-right">2</span>
                                <em className="fa fa-trash" />
                                <span>Trash</span>
                            </Link>
                            </li>
                            <li className="side-nav-header">
                            <small className="text-muted">LABELS</small>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="badge badge-danger float-right" />
                                <span>Red</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="badge badge-teal float-right" />
                                <span>Teal</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="badge badge-info float-right" />
                                <span>Blue</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="badge badge-warning float-right" />
                                <span>Yellow</span>
                            </Link>
                            </li>
                        </ul>
                        <ul className="list-group list-unstyled">
                            <li className="side-nav-header">
                            <small className="text-muted">Friends</small>
                            </li>
                            <li className="margin-b-10">
                            <Link className="media-box" href="#be"><span className="float-right"><span className="circle circle-danger circle-lg" /></span> 
                                <span className="float-left margin-r-10">
                                <img alt="user" className="media-box-object rounded-circle" src="/assets/img/avtar-3.png" width={40} /></span>
                                <span className="media-box-body"><span className="media-box-heading"><strong>Megan Doe</strong><br />
                                    <small className="text-muted">Designer</small></span></span></Link>
                            </li>
                            <li className="margin-b-10">
                            <Link className="media-box" href="#be"><span className="float-right"><span className="circle circle-success circle-lg" /></span> 
                                <span className="float-left margin-r-10">
                                <img alt="user" className="media-box-object rounded-circle" src="/assets/img/avtar-4.png" width={40} /></span>
                                <span className="media-box-body"><span className="media-box-heading"><strong>Hritik Doe</strong><br />
                                    <small className="text-muted">Designer</small></span></span></Link>
                            </li>
                            <li className="margin-b-10">
                            <Link className="media-box" href="#be"><span className="float-right"><span className="circle circle-danger circle-lg" /></span> 
                                <span className="float-left margin-r-10">
                                <img alt="user" className="media-box-object rounded-circle" src="/assets/img/avtar-3.png" width={40} />
                                </span>
                                <span className="media-box-body"><span className="media-box-heading"><strong>Megan Doe</strong><br />
                                    <small className="text-muted">Designer</small></span></span></Link>
                            </li>
                            <li className="margin-b-10">
                            <Link className="media-box" href="#be"><span className="float-right"><span className="circle circle-success circle-lg" /></span>
                                <span className="float-left margin-r-10">
                                <img alt="user" className="media-box-object rounded-circle" src="/assets/img/avtar-4.png" width={40} />
                                </span>
                                <span className="media-box-body"><span className="media-box-heading"><strong>Hritik Doe</strong><br />
                                    <small className="text-muted">Designer</small></span></span></Link>
                            </li>
                        </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="9">
                    <Card>
                        <Card.Body className="mail-compose">
                        <div className="float-right">
                            <Button size="sm" className="btn-default">
                            <em className="fa fa-print" />
                            </Button>
                        </div>
                        <h3 className="text-capitalize font-300"> Reply</h3>
                        <hr className="clearfix" />
                        <form className="form-horizontal" method="get">
                            <Form.Group>
                            <label>To:</label>
                            <Form.Control  type="text"  defaultValue="john.doe@domain.com" />
                            </Form.Group>
                            <Form.Group>
                            <label>Subject:</label>
                            <Form.Control  type="text"  defaultValue />
                            </Form.Group>
                            <Form.Group>
                            <label>Attachments:</label>
                            <div className="fileinput fileinput-new input-group" data-provides="fileinput">
                                <div className="form-control" data-trigger="fileinput"><span className="fileinput-filename" /></div>
                                <span className="input-group-addon btn btn-primary btn-file ">
                                <span className="fileinput-new">Select</span>
                                <span className="fileinput-exists">Change</span>
                                <input type="file" name="image" />
                                </span>
                                <Link to="#be" className="input-group-addon btn btn-danger  hover fileinput-exists" data-dismiss="fileinput">Remove</Link>
                            </div>
                            </Form.Group>
                        </form>
                        <textarea className="form-control" id="textarea" rows={10} style={{height: 300}} defaultValue={""} />
                        <div className="mail-body text-right tooltip-demo">
                            <Link to="/mail-index" className="btn btn-sm btn-primary btn-rounded box-shadow" data-toggle="tooltip" data-placement="top" title data-original-title="Send"><i className="fa fa-reply" /> Send</Link>
                            <Link to="/mail-index" className="btn btn-dark btn-sm btn-rounded box-shadow" data-toggle="tooltip" data-placement="top" title="Discard email"><i className="fa fa-times" /> Discard</Link>
                            <Link to="/mail-index" className="btn btn-success btn-sm btn-rounded box-shadow" data-toggle="tooltip" data-placement="top" title="Move to draft folder"><i className="fa fa-pencil" /> Draft</Link>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default MailCompose;
