import React from 'react';
import "./index.scss";
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class WidgetsApp extends React.Component {
    render() {
        return (
            <React.Fragment>                    
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Chat
                        <p className="text-muted">Lorem ipsum dolor sit amet</p>
                        </Card.Header>
                        <Card.Body>
                        <div className="scrollDiv">
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
                                    <small className="text-info">Today 12:31 pm - 10.08.2016</small>
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
                                    <small className="text-info">Today 12:31 pm - 10.08.2016</small>
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
                                    <small className="text-info">Today 12:31 pm - 10.08.2016</small>
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
                                    <small className="text-info">Today 12:31 pm - 10.08.2016</small>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
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
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        <Row>
                            <Col md="6">
                            Todo List
                            <p className="text-muted">Lorem ipsum dolor sit amet</p>
                            </Col>
                            <Col md="6">
                            <Link to="#be" className="btn btn-success btn-border box-shadow btn-circle pull-right"><i className="fa fa-plus" /></Link>
                            </Col>
                        </Row>
                        </Card.Header>
                        <Card.Body>
                        <div className="scrollDiv">
                            <ul className="todo-list">
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox1" type="checkbox" />
                                <label htmlFor="checkbox1">Lorem Ipsum is simply dummy text of the printing <small className="label label-info">Today</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox2" type="checkbox" />
                                <label htmlFor="checkbox2"> Lorem Ipsum is simply dummy text of the printing  dummy text of the printing and typesetting industry. <small className="label label-danger">Yesterday</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox3" type="checkbox" />
                                <label htmlFor="checkbox3"> Lorem Ipsum is simply dummy text of the printing  dummy text of the <small className="label label-info">1 Week</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox1" type="checkbox" />
                                <label htmlFor="checkbox1"> Lorem Ipsum is simply dummy text of the 	<small className="label label-primary"><i className="fa fa-clock-o" /> 3 Mins</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox4" type="checkbox" />
                                <label htmlFor="checkbox4"> Lorem Ipsum is simply dummy text of the printing  dummy text of the printing<small className="label label-warning">2 Week</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox5" type="checkbox" />
                                <label htmlFor="checkbox5"> Lorem Ipsum is simply dummy text of the<small className="label label-info">Today</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox1" type="checkbox" />
                                <label htmlFor="checkbox1"> Lorem Ipsum is simply dummy text of the printing  dummy text of<small className="label label-danger">Yesterdat</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox4" type="checkbox" />
                                <label htmlFor="checkbox4"> Lorem Ipsum is simply dummy text of the printing  dummy text of the printing<small className="label label-info"><i className="fa fa-clock-o" /> 3 Mins</small></label>
                                </div>
                            </li>
                            <li>
                                <div className="checkbox checkbox-primary margin-r-5">
                                <input id="checkbox5" type="checkbox" />
                                <label htmlFor="checkbox5"> Lorem Ipsum is simply dummy text of the<small className="label label-danger"><i className="fa fa-clock-o" /> 1 Week</small></label>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </Card.Body>
                        <Card.Footer>
                        <InputGroup>
                            <Form.Control  type="text"  placeholder="Add Todo..." />
                            <span className="input-group-btn">
                            <Button variant="primary" type="button">
                                Add</Button>
                            </span>
                        </InputGroup>
                        </Card.Footer>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Col>
                        <Card.Header>
                        Recent Comments
                        <p className="text-muted">Latest Comments on users</p>
                        </Card.Header>
                        <div className="comment-widgets">
                        <div className="d-flex flex-row comment-row">
                            <div className="mr-2"><img alt="user" className="rounded-circle" src="/assets/img/avtar-1.png" width={50} /></div>
                            <div className="comment-text w-100">
                            <h5>John Doe</h5>
                            <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            <div className="comment-footer">
                                <span className="text-muted pull-right">April 8, 2018</span> 
                                <span className="label label-info">Pending</span> 
                                <span className="action-icons">
                                <Link to="#be"><i className="ti-pencil-alt" /></Link> 
                                <Link to="#be"><i className="ti-check" /></Link>
                                <Link to="#be"><i className="ti-heart" /></Link>
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row comment-row active">
                            <div className="mr-2">
                            <span className="round"><img alt="user" src="/assets/img/avtar-2.png" width={50} /></span>
                            </div>
                            <div className="comment-text active w-100">
                            <h5>John Doe</h5>
                            <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            <div className="comment-footer">
                                <span className="text-muted pull-right">April 7, 2018</span> 
                                <span className="label label-success">Approved</span> 
                                <span className="action-icons">
                                <Link to="#be"><i className="ti-pencil-alt" /></Link> 
                                <Link to="#be"><i className="ti-check" /></Link>
                                <Link to="#be"><i className="ti-heart" /></Link>
                                </span>
                            </div>
                            </div>
                        </div>{/* Comment Row */}
                        <div className="d-flex flex-row comment-row">
                            <div className="mr-2">
                            <span className="round"><img alt="user" src="/assets/img/avtar-3.png" width={50} /></span>
                            </div>
                            <div className="comment-text w-100">
                            <h5>John Doe</h5>
                            <p className="m-b-5">Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            <div className="comment-footer">
                                <span className="text-muted pull-right">April 6, 2018</span> <span className="label label-danger">Rejected</span> <span className="action-icons"><Link to="#be"><i className="ti-pencil-alt" /></Link> <Link to="#be"><i className="ti-check" /></Link> <Link to="#be"><i className="ti-heart" /></Link></span>
                            </div>
                            </div>
                        </div>{/* Comment Row */}
                        <div className="d-flex flex-row comment-row">
                            <div className="mr-2">
                            <span className="round"><img alt="user" src="/assets/img/avtar-4.png" width={50} /></span>
                            </div>
                            <div className="comment-text w-100">
                            <h5>John Doe</h5>
                            <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            <div className="comment-footer">
                                <span className="text-muted pull-right">April 5, 2018</span> <span className="label label-info">Pending</span> <span className="action-icons"><Link to="#be"><i className="ti-pencil-alt" /></Link> <Link to="#be"><i className="ti-check" /></Link> <Link to="#be"><i className="ti-heart" /></Link></span>
                            </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row comment-row">
                            <div className="mr-2">
                            <span className="round"><img alt="user" src="/assets/img/avtar-2.png" width={50} /></span>
                            </div>
                            <div className="comment-text active w-100">
                            <h5>John Doe</h5>
                            <p className="m-b-5">Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                            <div className="comment-footer">
                                <span className="text-muted pull-right">April 7, 2018</span> 
                                <span className="label label-success">Approved</span> 
                                <span className="action-icons">
                                <Link to="#be"><i className="ti-pencil-alt" /></Link> 
                                <Link to="#be"><i className="ti-check" /></Link>
                                <Link to="#be"><i className="ti-heart" /></Link>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </Col>
                    </Col>
                    <div className="col-lg-6 col-xlg-9">
                    <Card>
                        <Card.Header>
                        Activity Timeline
                        <p className="text-muted">Lorem ipsum dolor sit amet</p>
                        </Card.Header>
                        <Card.Body>
                        <div className="profiletimeline">
                            <div className="sl-item">
                            <div className="sl-left"> <img src="/assets/img/avtar-1.png" alt="user" className="rounded-circle" /> </div>
                            <div className="sl-right">
                                <div><Link to="#be" className="link">John Doe</Link> <span className="sl-date">12 minutes ago</span>
                                <p>assign a new task <Link to="#be"> Design weblayout</Link></p>
                                <Row>
                                    <div className="col-lg-3 col-md-6 mb-2"><img src="/assets/img/gallery/1s.jpg" alt="user" className="img-fluid rounded" /></div>
                                    <div className="col-lg-3 col-md-6 mb-2"><img src="/assets/img/gallery/2s.jpg" alt="user" className="img-fluid rounded" /></div>
                                    <div className="col-lg-3 col-md-6 mb-2"><img src="/assets/img/gallery/3s.jpg" alt="user" className="img-fluid rounded" /></div>
                                    <div className="col-lg-3 col-md-6 mb-2"><img src="/assets/img/gallery/4s.jpg" alt="user" className="img-fluid rounded" /></div>
                                </Row>
                                <div className="like-comm">
                                    <Link to="#be" className="link mr-2">385 comment</Link> 
                                    <Link to="#be" className="link mr-2"><i className="fa fa-heart text-danger" /> 174 Love</Link> 
                                </div>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div className="sl-item">
                            <div className="sl-left"> <img src="/assets/img/avtar-2.png" alt="user" className="rounded-circle" /> </div>
                            <div className="sl-right">
                                <div> <Link to="#be" className="link">John Doe</Link> <span className="sl-date">8 minutes ago</span>
                                <div className="mt-2 row">
                                    <div className="col-md-3 col-xs-12"><img src="/assets/img/gallery/1s.jpg" alt="user" className="img-fluid rounded" /></div>
                                    <div className="col-md-9 col-xs-12">
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. </p> <Link to="#be" className="btn btn-success box-shadow btn-rounded"> Design weblayout</Link></div>
                                </div>
                                <div className="like-comm mt-2"> 
                                    <Link to="#be" className="link mr-2">248 comment</Link> 
                                    <Link to="#be" className="link mr-2"><i className="fa fa-heart text-danger" /> 84 Love</Link> 
                                </div>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div className="sl-item">
                            <div className="sl-left"> <img src="/assets/img/avtar-3.png" alt="user" /> </div>
                            <div className="sl-right">
                                <div><Link to="#be" className="link">John Doe</Link> <span className="sl-date">6 minutes ago</span>
                                <p className="mt-1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper </p>
                                </div>
                                <div className="like-comm mt-2"> 
                                <Link to="#be" className="link mr-2">68 comment</Link> 
                                <Link to="#be" className="link mr-2"><i className="fa fa-heart text-danger" /> 36 Love</Link> 
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div className="sl-item">
                            <div className="sl-left"> <img src="/assets/img/avtar-4.png" alt="user" className="rounded-circle" /> </div>
                            <div className="sl-right">
                                <div><Link to="#be" className="link">John Doe</Link> <span className="sl-date">4 minutes ago</span>
                                <blockquote className="mt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                </blockquote>
                                </div>
                            </div>
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Row>
                <Row>
                    <div className=" col-md-4 col-xs-12">
                    <Card>
                        <Card.Body className="text-center">
                        <img alt="profile" className="rounded-circle margin-b-10" src="/assets/img/avtar-4.png" width={80} />
                        <p className="lead margin-b-0">John Doe</p>
                        <p className="text-muted">Administrator</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                        <button className="btn btn-primary"><i className="demo-pli-male icon-fw" />Follow</button>
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
                        </Card.Body>
                    </Card>
                    </div>
                    <Col md="4">
                    <div className="widget text-center bg-indigo">
                        <img alt="Profile Avatar" className=" rounded-circle margin-b-10" width={70} src="/assets/img/avtar-3.png" />
                        <h4 className="font-400 margin-b-10">John Doe</h4>
                        <ul className="list-inline text-center margin-b-0">
                        <li className="list-inline-item"><Link to="#be"><i className="fa fa-facebook" /></Link></li>
                        <li className="list-inline-item"><Link to="#be"><i className="fa fa-twitter" /></Link></li>
                        <li className="list-inline-item"><Link to="#be"><i className="fa fa-google-plus" /></Link></li>
                        <li className="list-inline-item"><Link to="#be"><i className="fa fa-instagram" /></Link></li>
                        </ul>
                    </div>
                    <div className="widget white-bg text-center">
                        <img alt="Profile Avatar" width={70} className="rounded-circle mar-btm margin-b-10" src="/assets/img/avtar-1.png" />
                        <h4 className="font-400 margin-b-0">John Doe</h4>
                        <p className="text-muted margin-b-10">Web and Graphic designer</p>
                        <div>
                        <button className="btn btn-teal">Follow</button>
                        <button className="btn btn-success">Message</button>
                        </div>
                    </div>
                    </Col>
                    <Col md="4">
                    <div className="widget padding-0 white-bg">
                        <div className="bg-danger" style={{height: 120}} />
                        <div className="thumb-over">
                        <img src="/assets/img/avtar-5.png" alt="" width={100} className="rounded-circle" />
                        </div>
                        <div className="padding-20 text-center">
                        <p className="lead font-500 margin-b-0">John Doe</p>
                        <p className="text-muted">Administrator</p>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                        <button className="btn btn-primary"><i className="demo-pli-male icon-fw" />Follow</button>
                        </div>
                    </div>
                    </Col>
                    <Col md="4">
                    <Card>
                        <Card.Header>
                        Server Stats
                        <p className="text-muted">Lorem ipsum dolor sit amet</p>
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <span>Email Accounts</span>
                            <small className="float-right">3/10</small>
                        </div>
                        <div className="progress progress-mini">
                            <div style={{width: '70%'}} className="progress-bar bg-warning" />
                        </div>
                        <div>
                            <span>CPU Usage</span>
                            <small className="float-right">%50</small>
                        </div>
                        <div className="progress progress-mini">
                            <div style={{width: '50%'}} className="progress-bar bg-danger" />
                        </div>
                        <div>
                            <span>SQL Databases</span>
                            <small className="float-right">1/4</small>
                        </div>
                        <div className="progress progress-mini">
                            <div style={{width: '25%'}} className="progress-bar bg-teal" />
                        </div>
                        <div>
                            <span>Subdomains</span>
                            <small className="float-right">1/10</small>
                        </div>
                        <div className="progress progress-mini">
                            <div style={{width: '10%'}} className="progress-bar bg-dark" />
                        </div>
                        <div>
                            <span>Email Accounts</span>
                            <small className="float-right">50/100</small>
                        </div>
                        <div className="progress progress-mini">
                            <div style={{width: '50%'}} className="progress-bar bg-muted" />
                        </div>
                        </Card.Body>		
                    </Card>
                    </Col>
                    <Col md="4">
                    <div className="card weather">
                        <div className="city-selected">
                        <div className="weather-box">
                            <div className="info">
                            <div className="city">Ankara</div>
                            <div className="night">Night - 22:07 PM</div>
                            <div className="temp text-primary">3°</div>
                            <div className="wind">
                                <i className="wi wi-windy" />
                                <span>25 km/h</span>
                            </div>
                            </div>
                            <div className="icon text-primary">
                            <i className="wi wi-night-alt-hail" />
                            </div>
                        </div>
                        </div>
                        <div className="days">
                        <div className="row row-no-gutter">
                            <Col md="4">
                            <div className="day">
                                <h1>Monday</h1>
                                <i className="wi wi-day-rain" />
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="day">
                                <h1>Tuesday</h1>
                                <i className="wi wi-day-storm-showers" />
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="day">
                                <h1>Wednesday</h1>
                                <i className="wi wi-solar-eclipse" />
                            </div>
                            </Col>
                        </div>
                        </div>
                    </div>
                    </Col>
                    <Col md="4">
                    <Card className="weather">
                        <div className="city-selected bg-indigo">
                        <div className="weather-box">
                            <div className="info text-light">
                            <div className="city">Ankara</div>
                            <div className="night">Night - 22:07 PM</div>
                            <div className="temp">3°</div>
                            <div className="wind">
                                <i className="wi wi-windy" />
                                <span>25 km/h</span>
                            </div>
                            </div>
                            <div className="icon text-light">
                            <i className="wi wi-day-storm-showers" />
                            </div>
                        </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default WidgetsApp;
