import React from 'react';
import "./index.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class WidgetsData extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    {/* Column */}
                    <Col lg="4">
                    <Card>
                        <Card.Img variant="top" src="/assets/img/gallery/1s.jpg" />
                        <Card.Body>
                        <ul className="list-inline">
                            <li className="pr-5 pull-left">11 May 2018</li>
                            <li><Link to="#be">3 Comment</Link></li>
                        </ul>
                        <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                        <p className="mb-0 mt-3">Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
                        <Button  variant="success" className="box-shadow btn-rounded mt-3">Read more</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    {/* Column */}
                    {/* Column */}
                    <Col lg="4">
                    <Card>
                        <Card.Img variant="top" src="/assets/img/gallery/2s.jpg" />
                        <Card.Body>
                        <ul className="list-inline">
                            <li className="pr-5 pull-left">11 May 2018</li>
                            <li><Link to="#be" className="link">3 Comment</Link></li>
                        </ul>
                        <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                        <p className="mb-0 mt-3">Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
                        <Button  variant="success" className="box-shadow btn-rounded mt-3">Read more</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    {/* Column */}
                    {/* Column */}
                    <Col lg="4">
                    <Card>
                        <Card.Img variant="top" src="/assets/img/gallery/3s.jpg" />
                        <Card.Body>
                        <ul className="list-inline">
                            <li className="pr-5 pull-left">11 May 2018</li>
                            <li><Link to="#be">3 Comment</Link></li>
                        </ul>
                        <h3 className="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                        <p className="mb-0 mt-3">Titudin venenatis ipsum ac feugiat. Vestibulum ullamcorper quam.</p>
                        <Button  variant="success" className="box-shadow btn-rounded mt-3">Read more</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    {/* Column */}
                </Row>
                <Row>
                    <Col md="3">
                    <div className="widget  bg-light">
                        <div className="row row-table ">
                        <div className="margin-b-30">
                            <h2 className="margin-b-5">Product</h2>
                            <p className="text-muted">Total Product</p>
                            <span className="float-right text-primary widget-r-m">7859</span>
                        </div>
                        <div className="progress margin-b-10  progress-mini">
                            <div style={{width: '70%'}} className="progress-bar bg-primary" />
                        </div>
                        <p className="text-muted float-left margin-b-0">Change</p>
                        <p className="text-muted float-right margin-b-0">70%</p>
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget  bg-light">
                        <div className="row row-table ">
                        <div className="margin-b-30">
                            <h2 className="margin-b-5">Sales</h2>
                            <p className="text-muted">Total Sales</p>
                            <span className="float-right text-indigo widget-r-m">1349</span>
                        </div>
                        <div className="progress margin-b-10 progress-mini">
                            <div style={{width: '40%'}} className="progress-bar bg-indigo" />
                        </div>
                        <p className="text-muted float-left margin-b-0">Change</p>
                        <p className="text-muted float-right margin-b-0">40%</p>
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget  bg-light">
                        <div className="row row-table ">
                        <div className="margin-b-30">
                            <h2 className="margin-b-5">Orders</h2>
                            <p className="text-muted">Total Orders</p>
                            <span className="float-right text-success widget-r-m">285</span>
                        </div>
                        <div className="progress margin-b-10 progress-mini">
                            <div style={{width: '65%'}} className="progress-bar bg-success" />
                        </div>
                        <p className="text-muted float-left margin-b-0">Change</p>
                        <p className="text-muted float-right margin-b-0">65%</p>
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget  bg-light">
                        <div className="row row-table ">
                        <div className="margin-b-30">
                            <h2 className="margin-b-5">Visitors</h2>
                            <p className="text-muted">Total Visitors</p>
                            <span className="float-right text-warning widget-r-m">285</span>
                        </div>
                        <div className="progress margin-b-10 progress-mini">
                            <div style={{width: '20%'}} className="progress-bar bg-warning" />
                        </div>
                        <p className="text-muted float-left margin-b-0">Change</p>
                        <p className="text-muted float-right margin-b-0">20%</p>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                    <Col className="card widget padding-0">
                        <div className="bg-warning br-t-3">
                        <h3 className="mb-15 font-400 padding-15 ">Monthly Incomes</h3>
                        <div id="sparkline1" />
                        </div>
                        <Card.Body>
                        <div className="row text-center">
                            <Col>
                            <p className="margin-b-0 text-muted">Gross Income</p>
                            <h4 className="mv-0">$7820</h4>
                            </Col>
                            <Col>
                            <p className="margin-b-0 text-muted">Net Income</p>
                            <h4 className="mv-0">$154700</h4>
                            </Col>
                        </div>
                        </Card.Body>
                    </Col>
                    </Col>
                    <Col md="4">
                    <div className="card widget padding-0">
                        <div className="bg-primary br-t-3">
                        <h3 className="mb-15 font-400  padding-15">Yearly Incomes</h3>
                        <div id="sparkline2" />
                        </div>
                        <Card.Body>
                        <div className="row text-center">
                            <Col>
                            <p className="margin-b-0 text-muted">Gross Income</p>
                            <h4 className="mv-0">$77820</h4>
                            </Col>
                            <Col>
                            <p className="margin-b-0 text-muted">Net Income</p>
                            <h4 className="mv-0">$454700</h4>
                            </Col>
                        </div>
                        </Card.Body>
                    </div>
                    </Col>
                    <Col md="4">
                    <div className="card widget padding-0">
                        <div className="bg-danger padding-15 br-t-3">
                        <h3 className="mb-15 font-400">Monthly Visitors</h3>
                        <div id="sparkline3" />
                        </div>
                        <Card.Body>
                        <div className="row text-center">
                            <Col>
                            <p className="margin-b-0 text-muted">Unique Visitors</p>
                            <h4 className="mv-0">98758</h4>
                            </Col>
                            <Col>
                            <p className="margin-b-0 text-muted">Net Visitors</p>
                            <h4 className="mv-0">423701</h4>
                            </Col>
                        </div>
                        </Card.Body>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-primary float-right">Monthly</span>
                        <h2 className="margin-b-0">Income</h2>
                        </div>
                        <div className="widget-content">
                        <div id="sparkline4" className="text-center margin-b-10 " />
                        <div className="font-500 text-primary float-right">98% <i className="fa fa-bolt" /></div> 
                        <p className="text-muted margin-b-0">Total income</p>            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-success float-right">Monthly</span>
                        <h2 className="margin-b-0">Orders</h2>
                        </div>
                        <div className="widget-content">
                        <div id="sparkline5" className="text-center margin-b-10 " />
                        <div className="font-500 text-success float-right">28% <i className="fa fa-level-up" /></div>
                        <p className="text-muted margin-b-0">Total orders</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-warning float-right">Monthly</span>
                        <h2 className="margin-b-0">Visitors</h2>
                        </div>
                        <div className="widget-content">
                        <div id="sparkline6" className="text-center margin-b-10 " />
                        <div className="font-500 text-warning float-right">18% <i className="fa fa-level-up" /></div>
                        <p className="text-muted margin-b-0">Total visitor</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-danger float-right">Monthly</span>
                        <h2 className="margin-b-0">Active users</h2>
                        </div>
                        <div className="widget-content">
                        <div id="sparkline7" className="text-center margin-b-10 " />
                        <div className="font-500 text-danger float-right">8% <i className="fa fa-level-down" /></div>
                        <p className="text-muted margin-b-0">Total active users</p>                            
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-primary float-right">Monthly</span>
                        <h2 className="margin-b-0">Income</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10  text-primary">79,2458</h1>
                        <div className="font-500 text-primary float-right">98% <i className="fa fa-bolt" /></div>
                        <p className="text-muted margin-b-0">Total income</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-success float-right">Monthly</span>
                        <h2 className="margin-b-0">Orders</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10 text-success">6853</h1>
                        <div className="font-500 text-success float-right">28% <i className="fa fa-level-up" /></div>
                        <p className="text-muted margin-b-0">Total orders</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-warning float-right">Monthly</span>
                        <h2 className="margin-b-0">Visitors</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10 text-warning">21,7853</h1>
                        <div className="font-500 text-warning float-right">18% <i className="fa fa-level-up" /></div>
                        <p className="text-muted margin-b-0">Total visitor</p>                            
                        </div>
                    </div>
                    </Col>
                    <Col md="3">
                    <div className="widget widget-chart white-bg padding-0">
                        <div className="widget-title">
                        <span className="label label-danger float-right">Monthly</span>
                        <h2 className="margin-b-0">Active users</h2>
                        </div>
                        <div className="widget-content">
                        <h1 className="margin-b-10 text-danger">3758</h1>
                        <div className="font-500 text-danger float-right">8% <i className="fa fa-level-down" /></div>
                        <p className="text-muted margin-b-0">Total active users</p>                            
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="widget bg-light padding-0">
                        <Row className="row-table">
                        <div className="col-xs-4 text-center padding-15 bg-primary">
                            <em className="icon-bag fa-3x" />
                        </div>
                        <div className="col-xs-8 padding-15 text-right">
                            <h2 className="mv-0">4758</h2>
                            <div className="margin-b-0 text-muted">Sales</div>
                        </div>
                        </Row>
                    </div>
                    </Col>
                    <Col>
                    <div className="widget bg-light padding-0">
                        <Row className="row-table">
                        <div className="col-xs-4 text-center padding-15 bg-teal">
                            <em className="icon-basket fa-3x" />
                        </div>
                        <div className="col-xs-8 padding-15 text-right">
                            <h2 className="mv-0">785</h2>
                            <div className="margin-b-0 text-muted">Orders</div>
                        </div>
                        </Row>
                    </div>
                    </Col>
                    <Col>
                    <div className="widget bg-light padding-0">
                        <Row className="row-table">
                        <div className="col-xs-4 text-center padding-15 bg-success">
                            <em className="icon-people fa-3x" />
                        </div>
                        <div className="col-xs-8 padding-15 text-right">
                            <h2 className="mv-0">1235</h2>
                            <div className="margin-b-0 text-muted">Users</div>
                        </div>
                        </Row>
                    </div>
                    </Col>
                    <Col>
                    <div className="widget bg-light padding-0">
                        <Row className="row-table">
                        <div className="col-xs-4 text-center padding-15 bg-indigo">
                            <em className="icon-pie-chart fa-3x" />
                        </div>
                        <div className="col-xs-8 padding-15 text-right">
                            <h2 className="mv-0">2558 $</h2>
                            <div className="margin-b-0 text-muted">Profit</div>
                        </div>
                        </Row>
                    </div>
                    </Col>
                </Row>
                <Row>
                    {/* Column */}
                    <div className="col-md-6 col-lg-4 col-xlg-2">
                    <div className="widget card-info">
                        <div className="box bg-info text-center">
                        <h1 className="font-light text-white">28.064</h1>
                        <h6 className="text-white">Sessions</h6>
                        </div>
                    </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-6 col-lg-4 col-xlg-2">
                    <div className="widget card-success ">
                        <div className="box bg-success text-center">
                        <h1 className="font-light text-white">15.038</h1>
                        <h6 className="text-white">Users</h6>
                        </div>
                    </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-6 col-lg-4 col-xlg-2">
                    <div className="widget card-info  ">
                        <div className="box bg-info text-center">
                        <h1 className="font-light text-white">7853</h1>
                        <h6 className="text-white">Page Views</h6>
                        </div>
                    </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-6 col-lg-4 col-xlg-2">
                    <div className="widget card-primary ">
                        <div className="box bg-primary text-center">
                        <h1 className="font-light text-white">0.9s</h1>
                        <h6 className="text-white">Pages</h6>
                        </div>
                    </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-6 col-lg-4 col-xlg-2">
                    <div className="widget card-warning">
                        <div className="box bg-warning text-center">
                        <h1 className="font-light text-white">0.5s</h1>
                        <h6 className="text-white">Avg. Session</h6>
                        </div>
                    </div>
                    </div>
                    {/* Column */}
                    <div className="col-md-6 col-lg-4 col-xlg-2">
                    <div className="widget card-danger">
                        <div className="box bg-danger text-center">
                        <h1 className="font-light text-white">38%</h1>
                        <h6 className="text-white">Bounce Rate</h6>
                        </div>
                    </div>
                    </div>
                </Row>
            </React.Fragment>
        );
    }
}

export default WidgetsData;
