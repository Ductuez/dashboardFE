import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MailView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="3" className="mailbox-sidenav">
                    <Card>
                        <Card.Body>
                        <div className="clearfix margin-b-10">
                            <Link to="#be" className="btn btn-danger compose btn-block btn-rounded box-shadow">
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
                    </Col>
                    <Col sm="9">
                    <Card>
                        <Card.Body>
                        <div className="float-right">
                            <button type="button" className="btn btn-default btn-sm">
                            <em className="fa fa-print" />
                            </button>
                        </div>
                        <h3 className="text-capitalize font-300">Established fact that a reader...</h3>
                        <hr className="clearfix" />
                        <div className="media margin-b-20">
                            <Link className="float-left" href="#be"><img className="media-object rounded-circle" src="/assets/img/avtar-2.png" width={40} alt="" /> </Link>
                            <div className="media-body margin-l-10"> 
                            <span className=" float-right">
                                <Link to="mail-compose.html" className="btn btn-info btn-sm btn-rounded box-shadow">
                                <em className="fa fa-reply" /> Reply
                                </Link>
                            </span>
                            <h4 className="text-danger font-300 margin-b-0">John Doe</h4>
                            <small className="text-muted"> demo@domain.com <strong>To Me</strong> 13:30 - 23 September 2018</small> 
                            </div>
                        </div>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <p>
                            Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                        </p>
                        <hr />
                        <div className="inbox-attachments margin-b-20">
                            <span><i className="fa fa-paperclip margin-r-10 " /> Attachments (3)</span>
                        </div>
                        <div className="clearfix row">
                            <Col sm="2">
                            <div className="attachment-box">
                                <img src="/assets/img/gallery/1s.jpg" alt="" className="img-fluid rounded" />  
                                <div className="attachment-overlay">
                                <Link to="#be"><i className="fa fa-download" /></Link>
                                </div>
                            </div>                                    
                            </Col>
                            <Col sm="2">
                            <div className="attachment-box">
                                <img src="/assets/img/gallery/2s.jpg" alt="" className="img-fluid rounded" />  
                                <div className="attachment-overlay">
                                <Link to="#be"><i className="fa fa-download" /></Link>
                                </div>
                            </div>                                    
                            </Col>
                            <Col sm="2">
                            <div className="attachment-box">
                                <img src="/assets/img/gallery/3s.jpg" alt="" className="img-fluid rounded" />  
                                <div className="attachment-overlay">
                                <Link to="#be"><i className="fa fa-download" /></Link>
                                </div>
                            </div>                                    
                            </Col>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default MailView;
