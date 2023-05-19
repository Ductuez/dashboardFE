import React from 'react';
import "./index.scss";
import { Row,Col, Card,  Table,Button } from 'react-bootstrap';


class PageInvoice extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                        <Card>
                            <Card.Body>
                            <Row>
                                <Col md="6">
                                <h4>Invoice No :<small>85659-2018</small></h4>
                                </Col>
                                <Col md="6">
                                <div className="text-right">
                                    <Button variant="primary" size="sm" ><i className="fa fa-pencil" /> Edit </Button>
                                    <Button variant="primary" size="sm" ><i className="fa fa-check " /> Save </Button>
                                    <Button variant="primary" size="sm" ><i className="fa fa-dollar" /> Make A Payment</Button>
                                </div>
                                </Col>
                            </Row>
                            </Card.Body>

                            <Card.Body>
                            <div className="row margin-b-40">
                                <Col sm="6">
                                <h4>85659-2018</h4>
                                <address>
                                    <strong>ThemeTurka, Inc.</strong><br />
                                    Ataturk district<br />
                                    Turkey, P 06582<br />
                                    <abbr title="Phone">Pbx:</abbr> (0241) 256-52-58
                                </address>
                                </Col>
                            </div>
                            <div className="table-responsive margin-b-40">
                                <Table className="table-striped">
                                <thead>
                                    <tr>
                                    <th>Item List</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Tax</th>
                                    <th>Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>
                                        <div><strong>Lorem ipsum dolor sit amet</strong></div>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore.
                                        </small>
                                    </td>
                                    <td>1</td>
                                    <td>$120.00</td>
                                    <td>$240.20</td>
                                    <td>$533.20</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div><strong>Lorem ipsum dolor sit amet</strong></div>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </small>
                                    </td>
                                    <td>2</td>
                                    <td>$120.00</td>
                                    <td>$240.20</td>
                                    <td>$533.20</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div><strong>Lorem ipsum dolor sit amet</strong></div>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </small>
                                    </td>
                                    <td>3</td>
                                    <td>$120.00</td>
                                    <td>$240.20</td>
                                    <td>$533.20</td>
                                    </tr>
                                    <tr>
                                    <td>
                                        <div><strong>Lorem ipsum dolor sit amet</strong></div>
                                        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.
                                        </small>
                                    </td>
                                    <td>4</td>
                                    <td>$120.00</td>
                                    <td>$240.20</td>
                                    <td>$533.20</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </div>
                            <Row>
                                <Col md="6">
                                <h5>Additional Information</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                </Col>
                                <div className="col-md-4 col-md-offset-2">
                                <table className="table table-striped text-right">
                                    <tbody>
                                    <tr>
                                        <td><strong>Sub Total :</strong></td>
                                        <td>$1000.00</td>
                                    </tr>
                                    <tr>
                                        <td><strong>TAX :</strong></td>
                                        <td>$180.00</td>
                                    </tr>
                                    <tr>
                                        <td><strong>TOTAL :</strong></td>
                                        <td>$1180.00</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </Row>
                            <Row>
                                <div className="col-md-12 text-right">
                                <div>
                                    <button className="btn btn-success" onclick="window.print();"><i className="fa fa-print" /> Print</button>            
                                    <Button variant="primary">Invoice Submit</Button>            
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

export default PageInvoice;
