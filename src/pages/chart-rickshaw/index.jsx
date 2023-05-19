import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class ChartRickshaw extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Area chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="area-chart" className="rickshaw-graph" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Bar chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="bar-chart" className="rickshaw-graph" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>  
                <Row>
                    <Col md="4">
                    <Card>
                        <Card.Header>
                        Line chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="line-chart" className="rickshaw-graph" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="8">
                    <Card>
                        <Card.Header>
                        Scatterplot chart
                        </Card.Header>
                        <Card.Body>
                        <div>
                            <div id="scatterplot-chart" className="rickshaw-graph" />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>  
            </React.Fragment>
        );
    }
}

export default ChartRickshaw;
