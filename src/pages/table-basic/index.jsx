import React from 'react';
import "./index.scss";
import { Row, Col, Card, Table } from 'react-bootstrap';


class TableBasic extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Full Width Table Basic
                        </Card.Header>
                        <Card.Body>
                        <Table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Systems Administrator</td>
                                <td>New York</td>
                                <td>@newyork</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Regional Director</td>
                                <td>London</td>
                                <td>@london</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Office Manager</td>
                                <td>San Francisco</td>
                                <td>@sanfrancisco</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Junior Javascript Developer</td>
                                <td>Edinburgh</td>
                                <td>@edinburgh</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Director</td>
                                <td>London</td>
                                <td>@london</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Systems Administrator</td>
                                <td>New York</td>
                                <td>@newyork</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Regional Director</td>
                                <td>London</td>
                                <td>@london</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Office Manager</td>
                                <td>San Francisco</td>
                                <td>@sanfrancisco</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Junior Javascript Developer</td>
                                <td>Edinburgh</td>
                                <td>@edinburgh</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Director</td>
                                <td>London</td>
                                <td>@london</td>
                            </tr>
                            </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Table basic
                        </Card.Header>
                        <Card.Body>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Table Striped
                        </Card.Header>
                        <Card.Body>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Table hover
                        </Card.Header>
                        <Card.Body>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Table bordered
                        </Card.Header>
                        <Card.Body>
                        <Table className="table-bordered">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
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

export default TableBasic;
