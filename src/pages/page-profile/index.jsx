import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class PageProfile extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="4">
                        <div className="widget white-bg">
                            <div className="padding-20 text-center">
                            <img alt="Profile " width={140} className="rounded-circle mar-btm margin-b-10 circle-border " src="/assets/img/avtar-2.png" />
                            <p className="lead font-500 margin-b-0">John Doe</p>
                            <p className="text-muted">Administrator</p>
                            <p className="text-sm margin-b-0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                            <hr />
                            <ul className="list-unstyled margin-b-0 text-center row">
                                <li className="col-4">
                                <span className="font-600">1,345</span>
                                <p className="text-muted text-sm margin-b-0">Following</p>
                                </li>
                                <li className="col-4">
                                <span className="font-600">23K</span>
                                <p className="text-muted text-sm margin-b-0">Followers</p>
                                </li>
                                <li className="col-4">
                                <span className="font-600">278</span>
                                <p className="text-muted text-sm margin-b-0">Post</p>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="widget white-bg friends-group clearfix">
                            <small className="text-muted">Email address </small>
                            <p>john-doe@domain.com</p> 
                            <small className="text-muted">Phone</small>
                            <p>+90 (0241) 256-52-58</p> 
                            <small className="text-muted">Address</small>
                            <p>Ataturk district Turkey, P 06582</p>
                            <div className="map-box">


                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195868.3954179315!2d32.746964926889376!3d39.90908623136076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C+T%C3%BCrkiye!5e0!3m2!1str!2sin!4v1523713774785" width="100%" height={150} frameBorder={0} style={{border: 0}} allowFullScreen title="profile map" />
                            
                            
                            </div> 
                            <small className="text-muted">Social Profile</small>
                            <br />
                            <button className="btn btn-facebook"><i className="fa fa-facebook" /></button>
                            <button className="btn btn-twitter"><i className="fa fa-twitter" /></button>
                            <button className="btn btn-youtube"><i className="fa fa-youtube" /></button>
                        </div>
                        </Col>
                        <div className="col-8">
                        <Card>
                            <Card.Header>
                            Update Status
                            </Card.Header>
                            <Card.Body>
                            <form method="post" className="well well-default">
                                <div className="input-icon margin-b-10">
                                <textarea rows={2} className="form-control" placeholder="What's in your mind?" defaultValue={""} />
                                </div>
                                <div className=" float-right">
                                <Link to="#be" className="btn btn-primary">Send</Link>
                                </div>
                                <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link className="nav-link" href="#be"><i className="fa fa-user" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#be"><i className="fa fa-location-arrow" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#be"><i className=" fa fa-camera" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#be"><i className="fa fa-smile-o" /></Link>
                                </li>
                                </ul>
                            </form>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                            <div className="tabs">
                                <ul className="nav nav-tabs">
                                <li className="nav-item" role="presentation"><Link className="nav-link  active" href="#timeline" aria-controls="timeline" role="tab" data-toggle="tab">Timeline</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link" href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</Link></li>
                                </ul>
                                <div className="tab-content">
                                <div role="tabpanel" className="tab-pane active" id="timeline">
                                    <div className="widget white-bg">
                                    <ul className="comments-list list-unstyled clearfix">
                                        <li className="clearfix">
                                        <img src="/assets/img/avtar-2.png" alt="" width={70} className="rounded-circle circle-border" />
                                        <div className="content">
                                            <div className="comments-header">
                                            <strong>John Doe</strong>
                                            <small className="text-muted">30 Minutes Ago</small>
                                            </div>
                                            <p>Lorem ipsum industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                            <ul className="list-inline row">
                                            <li><Link to="#be">
                                                <img alt="" src="/assets/img/gallery/1s.jpg" className="img-fluid rounded" width={100} />
                                                </Link></li>
                                            <li><Link to="#be">
                                                <img alt="" src="/assets/img/gallery/2s.jpg" className="img-fluid rounded" width={100} />
                                                </Link></li>
                                            <li><Link to="#be">
                                                <img alt="" src="/assets/img/gallery/3s.jpg" className="img-fluid rounded" width={100} />
                                                </Link></li>
                                            </ul>
                                            <ul className="list-inline row">
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-comments text-primary" /> 94</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-thumbs-up text-danger" /> 145</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-reply text-danger" /> Reply</Link></li>
                                            </ul>
                                        </div>
                                        </li>
                                        <li className="clearfix">
                                        <img src="/assets/img/avtar-3.png" alt="" width={70} className="rounded-circle circle-border" />
                                        <div className="content">
                                            <div className="comments-header">
                                            <strong>John Doe</strong>
                                            <small className="text-muted">30 Minutes Ago</small>
                                            </div>
                                            <p>Lorem ipsum industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                            <ul className="list-inline row">
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-comments text-primary" /> 94</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-thumbs-up text-danger" /> 145</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-reply text-danger" /> Reply</Link></li>
                                            </ul>
                                        </div>
                                        </li>
                                        <li className="clearfix">
                                        <img src="/assets/img/avtar-4.png" alt="" width={70} className="rounded-circle circle-border" />
                                        <div className="content">
                                            <div className="comments-header">
                                            <strong>John Doe</strong>
                                            <small className="text-muted">30 Minutes Ago</small>
                                            </div>
                                            <p>Lorem ipsum industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                            <ul className="list-inline row">
                                            <li><Link to="#be">
                                                <img alt="" src="/assets/img/gallery/1s.jpg" className="img-fluid rounded" width={100} />
                                                </Link></li>
                                            <li><Link to="#be">
                                                <img alt="" src="/assets/img/gallery/2s.jpg" className="img-fluid rounded" width={100} />
                                                </Link></li>
                                            </ul>
                                            <ul className="list-inline row">
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-comments text-primary" /> 94</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-thumbs-up text-danger" /> 145</Link></li>
                                            <li className="nav-item"><Link className="nav-link" href="#be"><i className="fa fa-reply text-danger" /> Reply</Link></li>
                                            </ul>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane" id="profile">
                                    <div className="widget white-bg">
                                    <Row>
                                        <div className="col-md-2 col-xs-6 b-r"> <strong>Full Name</strong>
                                        <br />
                                        <p className="text-muted">John Deo</p>
                                        </div>
                                        <Col md="4" xs="6" className="b-r"> <strong>Mobile</strong>
                                        <br />
                                        <p className="text-muted">+90 (0241) 256-52-58</p>
                                        </Col>
                                        <Col md="4" xs="6" className="b-r"> <strong>Email</strong>
                                        <br />
                                        <p className="text-muted">john-doe@domain.com</p>
                                        </Col>
                                        <div className="col-md-2 col-xs-6"> <strong>Location</strong>
                                        <br />
                                        <p className="text-muted">Ankara</p>
                                        </div>
                                    </Row>
                                    <hr />
                                    <p className="mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <h5 className="font-medium mt-20">Skill Set</h5>
                                    <hr />
                                    <div className="mt-20">
                                        <span>Php &amp; Mysql</span>
                                        <small className="float-right">85%</small>
                                    </div>
                                    <div className="progress progress-mini">
                                        <div style={{width: '85%'}} className="progress-bar bg-warning" />
                                    </div>
                                    <div className="mt-20">
                                        <span>HTML 5</span>
                                        <small className="float-right">100%</small>
                                    </div>
                                    <div className="progress progress-mini">
                                        <div style={{width: '100%'}} className="progress-bar bg-success" />
                                    </div>
                                    <div className="mt-20">
                                        <span>jQuery</span>
                                        <small className="float-right">60</small>
                                    </div>
                                    <div className="progress progress-mini">
                                        <div style={{width: '60%'}} className="progress-bar bg-danger" />
                                    </div>
                                    <div className="mt-20">
                                        <span>Photoshop</span>
                                        <small className="float-right">70%</small>
                                    </div>
                                    <div className="progress progress-mini">
                                        <div style={{width: '70%'}} className="progress-bar bg-primary" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </React.Fragment>
        );
    }
}

export default PageProfile;
