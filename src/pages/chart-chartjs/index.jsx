import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class ChartChartjs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Line Chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <canvas id="linechart" height={140} />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Bar Chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <canvas id="barchart" height={140} />
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
                            <canvas id="piechart" height={140} />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Bar Chart Horizontal
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <canvas id="bar-chart-horizontal" height={140} />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Polar Area Chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <canvas id="polar-chart" height={140} />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Radar Chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <canvas id="radar-chart" height={140} />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>         
            </React.Fragment>
        );
    }
}

export default ChartChartjs;
