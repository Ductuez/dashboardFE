import React from 'react';
import "./index.scss";
import { Row, Col, Card, Table } from 'react-bootstrap';


class ChartSparkline extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Inline charts
                        </Card.Header>
                        <Card.Body>
                        <Table className="table-bordered white-bg">
                            <thead>
                            <tr>
                                <th>Graph</th>
                                <th>Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                <span id="sparkline1" />
                                </td>
                                <td>
                                Inline line chart
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <span id="sparkline2" />
                                </td>
                                <td>
                                Bar chart
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <span id="sparkline3" />
                                </td>
                                <td>
                                Pie chart
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <span id="sparkline4" />
                                </td>
                                <td>
                                Long inline chart
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <span id="sparkline5" />
                                </td>
                                <td>
                                Tristate chart
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <span id="sparkline6" />
                                </td>
                                <td>
                                Discrete chart
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ChartSparkline;
