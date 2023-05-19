import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class ChartRadial extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Knob Chart example
                        </Card.Header>
                        <Card.Body className="text-center">
                        <Row>
                            <Col md="3">
                            <h3><small>Default</small></h3>
                            <input className="knob" data-fgcolor="#34bfa3" data-thickness=".4" defaultValue={5} />
                            </Col>
                            <Col md="3">
                            <h3><small>Ready only</small></h3>
                            <input className="knob" data-fgcolor="#36a3f7" data-thickness=".4" readOnly defaultValue={22} />
                            </Col>
                            <Col md="3">
                            <h3><small>Offset and arc</small></h3>
                            <input className="knob" data-angleoffset={-125} data-anglearc={250} data-fgcolor="#f4516c" data-rotation="anticlockwise" defaultValue={35} />
                            </Col>
                            <Col md="3">
                            <h3><small>Display previous</small></h3>
                            <input className="knob" data-min={-10000} data-fgcolor="#ffb822" data-displayprevious="true" data-max={10000} data-step=".1" defaultValue={0} />
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Easy Pie Chart
                        </Card.Header>
                        <Card.Body className="text-center">
                        <Row>
                            <Col md="3">
                            <h3><small>Default</small></h3>
                            <div id="easypie1" data-percent={85} className="easypie-chart">
                                <span>85</span>
                            </div>
                            </Col>
                            <Col md="3">
                            <h3><small>Slim</small></h3>
                            <div id="easypie2" data-percent={45} className="easypie-chart">
                                <span>45</span>
                            </div>
                            </Col>
                            <Col md="3">
                            <h3><small>Track color</small></h3>
                            <div id="easypie3" data-percent={75} className="easypie-chart">
                                <span>75</span>
                            </div>
                            </Col>
                            <Col md="3">
                            <h3><small>Scale color</small></h3>
                            <div id="easypie4" data-percent={60} className="easypie-chart">
                                <span>60</span>
                            </div>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ChartRadial;
