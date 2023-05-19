import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class ChartFlot extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="7">
                    <Card>
                        <Card.Header>
                        Line type chart
                        </Card.Header>
                        <Card.Body>
                        <div className="flot-chart">
                            <div className="flot-chart-content" id="flot-line-chart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="5">
                    <Card>
                        <Card.Header>
                        Bar chart example
                        </Card.Header>
                        <Card.Body>
                        <div className="flot-chart">
                            <div className="flot-chart-content" id="flot-bar-chart" />
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
                        <div className="flot-chart">
                            <div className="flot-chart-content" id="flot-pie-chart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Moving chart
                        </Card.Header>
                        <Card.Body>
                        <div className="flot-chart">
                            <div className="flot-chart-content" id="flot-line-chart-moving" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Multiple Axes Line Chart Example 
                        </Card.Header>
                        <Card.Body>
                        <div className="flot-chart">
                            <div className="flot-chart-content" id="multi-axes-line" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>                   

            </React.Fragment>
        );
    }
}

export default ChartFlot;
