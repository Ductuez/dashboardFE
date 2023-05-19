import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class ChartC3 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Line chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="lineChart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        time series type chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="timeseriesChart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        scatter Chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="scatterChart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Pie Chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="pieChart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Bar type chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="stocked" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                    <Card>
                        <Card.Header>
                        Gauge type chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="gauge" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="8">
                    <Card>
                        <Card.Header>
                        donut type chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="donut" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ChartC3;
