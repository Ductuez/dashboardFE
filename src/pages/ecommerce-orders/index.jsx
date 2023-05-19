import React from 'react';
import "./index.scss";
import { Row, Col, Card, Badge, Table, Button } from 'react-bootstrap';


class EcommerceOrders extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Orders
                        <p className="text-muted">Lorem ipsum dolor sit amet</p>
                        </Card.Header>
                        <Card.Body>
                        <Table className="table table-striped dt-responsive nowrap">
                            <thead>
                            <tr>
                                <th style={{width: 80}}>
                                <strong>ORDER ID</strong>
                                </th>
                                <th>
                                <strong>PURCHASED ON</strong>
                                </th>
                                <th>
                                <strong>CLIENT NAME</strong>
                                </th>
                                <th>
                                <strong>AMOUNT</strong>
                                </th>
                                <th>
                                <strong>QUANTITY</strong>
                                </th>
                                <th>
                                <strong>SHIPMENT</strong>
                                </th>
                                <th className="text-center">
                                <strong>STATUS</strong>
                                </th>
                                <th className="text-center">
                                <strong>VIEW</strong>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0001</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="success">Was Delivered</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0002</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="warning">Pending</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0003</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="danger">Cancel</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0004</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="success">Was Delivered</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="warning">Pending</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0006</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="danger">Cancel</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0007</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="success">Was Delivered</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0008</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="warning">Pending</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0009</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="danger">Cancel</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0010</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="success">Was Delivered</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0011</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="warning">Pending</Badge>
                                </td>
                                <td className="text-center">
                                <button type="button" className="btn btn-sm btn-default">
                                    <em className="fa fa-search" />
                                </button>
                                </td>
                            </tr>
                            <tr>
                                <td>0012</td>
                                <td>02/08/2018</td>
                                <td>Description for Product</td>
                                <td>$28.55</td>
                                <td>385</td>
                                <td>04/09/2018</td>
                                <td className="text-center">
                                <Badge variant="danger">Cancel</Badge>
                                </td>
                                <td className="text-center">
                                <Button size="sm" type="button" className="btn-default">
                                    <em className="fa fa-search" />
                                </Button>
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

export default EcommerceOrders;
