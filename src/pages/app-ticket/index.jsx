import React from 'react';
import "./index.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class AppTicket extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        <div className="float-right mt-10">
                            <Link to="#be" className="btn btn-success btn-rounded box-shadow btn-icon">
                                <i className="fa fa-plus" /> Create New</Link>
                        </div>
                        Support Ticket
                        <p className="text-muted">Lorem Ipsum is simply dummy text of the <code>printing and typesetting</code> industry.</p>
                        </Card.Header>
                        <Card.Body>
                        <Row>
                            <Col>
                            <div className="widget bg-primary padding-15">
                                <Row className="row-table">
                                <Col xs="8" className="padding-15 text-center">
                                    <h4 className="mv-0">4758</h4>
                                    <div className="margin-b-0 ">Total Tickets</div>
                                </Col>
                                </Row>
                            </div>
                            </Col>
                            <Col>
                            <div className="widget bg-warning padding-15">
                                <Row className="row-table">
                                <Col xs="8" className="padding-15 text-center">
                                    <h4 className="mv-0">785</h4>
                                    <div className="margin-b-0">New</div>
                                </Col>
                                </Row>
                            </div>
                            </Col>
                            <Col>
                            <div className="widget bg-success padding-15">
                                <Row className="row-table">
                                <Col xs="8" className="padding-15 text-center">
                                    <h4 className="mv-0">1235</h4>
                                    <div className="margin-b-0">Complete</div>
                                </Col>
                                </Row>
                            </div>
                            </Col>
                            <Col>
                            <div className="widget bg-danger padding-15">
                                <Row className="row-table">
                                <Col xs="8" className="padding-15 text-center">
                                    <h4 className="mv-0">2558</h4>
                                    <div className="margin-b-0">Pending</div>
                                </Col>
                                </Row>
                            </div>
                            </Col>
                        </Row>
                        <table id="datatable" className="table table-striped nowrap dataTable no-footer dtr-inline" width="100%">
                            <thead>
                            <tr>
                                <th>
                                <strong>ID</strong>
                                </th>
                                <th>
                                <strong>Name</strong>
                                </th>
                                <th>
                                <strong>Email</strong>
                                </th>
                                <th>
                                <strong>Subject</strong>
                                </th>
                                <th>
                                <strong>Status</strong>
                                </th>
                                <th>
                                <strong>Date</strong>
                                </th>
                                <th>
                                <strong>Action</strong>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1425</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-2.png" width={30} /> 
                                John Doe
                                </td>
                                <td>john-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-warning">New</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1426</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-1.png" width={30} /> 
                                Govinda Doe
                                </td>
                                <td>govinda-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-success">Complete</span>
                                </td>
                                <td>09/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1427</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-3.png" width={30} /> 
                                Megan Doe
                                </td>
                                <td>megan-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-warning">New</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1428</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-4.png" width={30} /> 
                                Hritic Doe
                                </td>
                                <td>hritic-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-success">Complete</span>
                                </td>
                                <td>13/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1429</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-5.png" width={30} /> 
                                Bianca Doe
                                </td>
                                <td>bianca-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-success">Complete</span>
                                </td>
                                <td>11/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1430</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-6.png" width={30} /> 
                                John Doe
                                </td>
                                <td>john-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-warning">New</span>
                                </td>
                                <td>14/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1431</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-7.png" width={30} /> 
                                Govinda Doe
                                </td>
                                <td>govinda-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-success">Complete</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1432</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-8.png" width={30} /> 
                                Megan Doe
                                </td>
                                <td>megan-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-danger">Pending</span>
                                </td>
                                <td>12/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1433</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-3.png" width={30} /> 
                                Hritic Doe
                                </td>
                                <td>hritic-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-warning">New</span>
                                </td>
                                <td>16/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1434</td>
                                <td>
                                <img alt="user" className="media-box-object rounded-circle mr-2" src="/assets/img/avtar-1.png" width={30} /> 
                                John Doe
                                </td>
                                <td>john-doe@domain.com</td>
                                <td>How to change colors</td>
                                <td className="text-center">
                                <span className="label label-danger">Pending</span>
                                </td>
                                <td>15/07/2018</td>
                                <td className="text-center">
                                <Button variant="success" size="sm"><i className="fa fa-reply" /></Button>{' '}
                                <Button variant="danger" size="sm"><i className="fa fa-trash" /></Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default AppTicket;
