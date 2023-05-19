import React from 'react';
import "./index.scss";
import { Row, Col, Card, Table, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

class CorporatePages extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        <div className="float-right mt-10">
                            <Link to="#be" className="btn btn-primary btn-icon btn-rounded box-shadow"><i className="fa fa-plus" /> Add New Page</Link>
                        </div>
                        All Pages
                        <p className="text-muted">Lorem Ipsum is simply dummy text of the <code>printing and typesetting</code> industry.</p>
                        </Card.Header>
                        <Card.Body>
                        <Table id="datatable1" className="table table-striped dt-responsive nowrap table-hover">
                            <thead>
                            <tr>
                                <th className="text-center">
                                <strong>ID</strong>
                                </th>
                                <th className="text-center">
                                <strong>Page Name</strong>
                                </th>
                                <th className="text-center">
                                <strong>Menu Position</strong>
                                </th>
                                <th className="text-center">
                                <strong>Published</strong>
                                </th>
                                <th className="text-center">
                                <strong>Added</strong>
                                </th>
                                <th className="text-center">
                                <strong>Action</strong>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>0001</td>
                                <td>About us</td>
                                <td>Header Menu</td>
                                <td className="text-center">
                                <span className="label label-success">Yes</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button className="btn btn-sm btn-default"><i className="fa fa-search" /></Button>{' '}
                                <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>0002</td>
                                <td>Our Vision</td>
                                <td>Header Menu</td>
                                <td className="text-center">
                                <span className="label label-success">Yes</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button className="btn btn-sm btn-default"><i className="fa fa-search" /></Button>{' '}
                                <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>0003</td>
                                <td>Team</td>
                                <td>Footer Menu</td>
                                <td className="text-center">
                                <span className="label label-success">Yes</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button className="btn btn-sm btn-default"><i className="fa fa-search" /></Button>{' '}
                                <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>0004</td>
                                <td>Our Documents</td>
                                <td>Header Menu</td>
                                <td className="text-center">
                                <span className="label label-danger">No</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button className="btn btn-sm btn-default"><i className="fa fa-search" /></Button>{' '}
                                <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>0005</td>
                                <td>Why us?</td>
                                <td>Footer Menu</td>
                                <td className="text-center">
                                <span className="label label-danger">No</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button className="btn btn-sm btn-default"><i className="fa fa-search" /></Button>{' '}
                                <Button variant="success" size="sm"><i className="fa fa-edit" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>{' '}
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

export default CorporatePages;
