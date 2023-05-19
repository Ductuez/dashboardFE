import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class ChartMorris extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Line chart
                        </Card.Header>
                        <Card.Body>
                        <div className="morris-chart-content">
                            <div id="morris-line-chart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Bar chart example
                        </Card.Header>
                        <Card.Body>
                        <div className="morris-chart-content">
                            <div id="morris-bar-chart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Donut chart
                        </Card.Header>
                        <Card.Body>
                        <div className="morris-chart-content">
                            <div id="morris-donut-chart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Area chart
                        </Card.Header>
                        <Card.Body>
                        <div className="morris-chart-content">
                            <div id="morris-area-chart" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ChartMorris;
