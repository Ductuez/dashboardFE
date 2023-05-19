import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';

class UiGrid extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>  
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Grid system
                        <p />
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">Using a single set of <code>.col-md-*</code> grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any <code>.row</code>.</p>
                        <Row>
                            <Col md="2">
                            <div className="demo-grid-block">
                                .col-md-2
                            </div> 
                            </Col>
                            <Col md="2">
                            <div className="demo-grid-block">
                                .col-md-2
                            </div>
                            </Col>
                            <Col md="2">
                            <div className="demo-grid-block">
                                .col-md-2
                            </div>
                            </Col>
                            <Col md="2">
                            <div className="demo-grid-block">
                                .col-md-2
                            </div>
                            </Col>
                            <Col md="2">
                            <div className="demo-grid-block">
                                .col-md-2
                            </div>
                            </Col>
                            <Col md="2">
                            <div className="demo-grid-block">
                                .col-md-2
                            </div>
                            </Col>
                        </Row>
                        <Row>             
                            <Col md="3">
                            <div className="demo-grid-block">
                                .col-md-3
                            </div>
                            </Col>
                            <Col md="3">
                            <div className="demo-grid-block">
                                .col-md-3
                            </div>
                            </Col>
                            <Col md="3">
                            <div className="demo-grid-block">
                                .col-md-3
                            </div>
                            </Col>
                            <Col md="3">
                            <div className="demo-grid-block">
                                .col-md-3
                            </div>
                            </Col>
                        </Row>
                        <Row>             
                            <Col md="4">
                            <div className="demo-grid-block">
                                .col-md-4
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="demo-grid-block">
                                .col-md-4
                            </div>
                            </Col>
                            <Col md="4">
                            <div className="demo-grid-block">
                                .col-md-4
                            </div>
                            </Col>
                        </Row>
                        <Row>             
                            <Col md="6">
                            <div className="demo-grid-block">
                                .col-md-6
                            </div>
                            </Col>
                            <Col md="6">
                            <div className="demo-grid-block">
                                .col-md-6
                            </div>
                            </Col>
                        </Row>
                        <Row>             
                            <Col md="12">
                            <div className="demo-grid-block">
                                .col-md-12
                            </div>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>  
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Offset Grid
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">Move columns to the right using <code>.col-md-offset-*</code> classes. These classes increase the left margin of a column by <code>*</code> columns. For example, <code>.col-md-offset-4</code> moves <code>.col-md-4</code> over four columns.</p>
                        <Row>             
                            <div className="col-md-10 col-md-offset-2">
                            <div className="demo-grid-block">
                                .col-md-10 col-md-offset-2 <small className="text-muted">Offset Grid</small>
                            </div>
                            </div>
                            <div className="col-md-6 col-md-offset-1">
                            <div className="demo-grid-block">
                                .col-md-6 col-md-offset-1 <small className="text-muted">Offset Grid</small>
                            </div>
                            </div>
                            <div className="col-md-6 col-md-offset-3">
                            <div className="demo-grid-block">
                                .col-md-6 .col-md-offset-3 <small className="text-muted">Offset Grid</small>
                            </div>
                            </div>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiGrid;
