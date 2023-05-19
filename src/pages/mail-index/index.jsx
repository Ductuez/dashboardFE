import React from 'react';
import "./index.scss";
import { Row, Card, Col, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MailIndex extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <div className="col-md-3 mailbox-sidenav">
                    <Card>
                        <Card.Body>
                        <div className="clearfix margin-b-10">
                            <Link to="#be" className="btn btn-danger compose btn-block box-shadow btn-rounded">
                            <em className="fa fa-pencil" />
                            <span>Compose</span>
                            </Link>
                        </div>
                        <ul className="nav nav-pills nav-stacked flex-column">
                            <li className="side-nav-header">
                            <small className="text-muted">Mailbox</small>
                            </li>
                            <li className="nav-item active">
                            <Link className="nav-link" href="#be">
                                <span className="badge badge-success float-right mt-1">18</span>
                                <em className="fa fa-inbox" />
                                <span>Inbox</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <em className="fa fa-star" />
                                <span>Starred</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <em className="fa fa-paper-plane-o" />
                                <span>Sent</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <span className="badge badge-success float-right mt-1">8</span>
                                <em className="fa fa-edit" />
                                <span>Draft</span>
                            </Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" href="#be">
                                <em className="fa fa-trash" />
                                <span>Trash</span>
                            </Link>
                            </li>
                            <li className="side-nav-header">
                            <small className="text-muted">Labels</small>
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
                    </div>
                    <Col md="9">
                    <Card>
                        <Card.Header>
                        <Row>
                            <Col md="6">
                            Inbox
                            </Col>
                            <Col md="6">
                            <div className="card-search">
                                <form action="#">                                      
                                <Form.Control  type="text"  placeholder="Search inbox..." name="s" />                                          
                                <span className="fa fa-search" />                                                                               
                                </form>
                            </div>
                            </Col>
                        </Row>
                        </Card.Header>
                        <Card.Body>
                        <div className="clearfix margin-b-10 mail-right-buttons">
                            <div className="btn-group float-left">
                            <button type="button" className="btn btn-default btn-sm">
                                <em className="fa fa-mail-reply" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                                <em className="fa fa-mail-reply-all" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                                <em className="fa fa-mail-forward" />
                            </button>
                            </div>
                            <div className="btn-group float-right">
                            <button type="button" className="btn btn-default btn-sm">
                                <em className="fa fa-exclamation" />
                            </button>
                            <button type="button" className="btn btn-default btn-sm">
                                <em className="fa fa-times " />
                            </button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <Table className="table-hover table-maillist">
                            <tbody><tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-1.png" width={40} alt="" /> </Link>
                                </td>
                                <td><strong><Link to="mail-view" className="color-info">John Doe</Link></strong></td>
                                <td>
                                    <Link to="mail-view">At vero eos et accusamus et iusto odio dignissimos...</Link>
                                </td>
                                <td className="mail-date">8:30 pm</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-2.png" width={40} alt="" /> </Link>
                                </td>
                                <td><Link to="mail-view" className="color-info">Govinda Doe</Link></td>
                                <td>
                                    <Link to="mail-view">Accusamus et iusto odio dignissimos...</Link>
                                </td>
                                <td className="mail-date">Sept 10</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-3.png" width={40} alt="" /> </Link>
                                </td>
                                <td><Link to="mail-view" className="color-info">Megan Doe</Link></td>
                                <td>
                                    <Link to="mail-view">Checkout the new items...</Link>
                                </td>
                                <td className="mail-date">Sept 10</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-4.png" width={40} alt="" /> </Link>
                                </td>
                                <td><Link to="mail-view" className="color-info">Hritik Doe</Link></td>
                                <td>
                                    <Link to="mail-view">John Doe Mention you in a tweet...</Link>
                                </td>
                                <td className="mail-date">Sept 10</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-5.png" width={40} alt="" /> </Link>
                                </td>
                                <td><strong><Link to="mail-view" className="color-info">Bianca Doe</Link></strong></td>
                                <td>
                                    <Link to="mail-view">What about assan new admin...</Link>
                                </td>
                                <td className="mail-date">Sept 9</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-1.png" width={40} alt="" /> </Link>
                                </td>
                                <td><strong><Link to="mail-view" className="color-info">John Doe</Link></strong></td>
                                <td>
                                    <Link to="mail-view">At vero eos et accusamus et iusto odio dignissimos...</Link>
                                </td>
                                <td className="mail-date">Sept 9</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-2.png" width={40} alt="" /> </Link>
                                </td>
                                <td><Link to="mail-view" className="color-info">Govinda Doe</Link></td>
                                <td>
                                    <Link to="mail-view">Accusamus et iusto odio dignissimos...</Link>
                                </td>
                                <td className="mail-date">Sept 8</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-3.png" width={40} alt="" /> </Link>
                                </td>
                                <td><Link to="mail-view" className="color-info">Megan Doe</Link></td>
                                <td>
                                    <Link to="mail-view">Checkout the new items...</Link>
                                </td>
                                <td className="mail-date">Sept 7</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-4.png" width={40} alt="" /> </Link>
                                </td>
                                <td><Link to="mail-view" className="color-info">Hritik Doe</Link></td>
                                <td>
                                    <Link to="mail-view">John Doe Mention you in a tweet...</Link>
                                </td>
                                <td className="mail-date">Sept 6</td>
                                </tr>
                                <tr>
                                <td>
                                    <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-5.png" width={40} alt="" /> </Link>
                                </td>
                                <td><strong><Link to="mail-view" className="color-info">Bianca Doe</Link></strong></td>
                                <td>
                                    <Link to="mail-view">What about assan new admin...</Link>
                                </td>
                                <td className="mail-date">Sept 5</td>
                                </tr>
                            </tbody></Table>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default MailIndex;
