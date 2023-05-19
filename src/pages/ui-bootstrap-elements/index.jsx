import React from 'react';
import "./index.scss";
import { Row, Col, Card, Badge, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class UiBootstrapElements extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Row>
                        <Col sm="12">
                        <Card>
                            <Card.Header>
                            Badges
                            </Card.Header>
                            <Card.Body>
                            <Row>
                                <Col sm="6">
                                <h1>Example heading <Badge variant="secondary">New</Badge></h1>
                                <h2>Example heading <Badge variant="indigo">New</Badge></h2>
                                <h3>Example heading <Badge variant="teal">New</Badge></h3>
                                <h4>Example heading <Badge variant="success">New</Badge></h4>
                                <h5>Example heading <Badge variant="danger">New</Badge></h5>
                                <h6>Example heading <Badge variant="warning">New</Badge></h6>   
                                </Col>
                                <Col sm="3">
                                <h5><small>Contextual variations</small></h5>
                                <p className="text-muted">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                                <span className="badge badge-default">Default</span>
                                <Badge variant="secondary">Primary</Badge>
                                <Badge variant="success">Success</Badge>
                                <Badge variant="info">Info</Badge>
                                <Badge variant="warning">Warning</Badge>
                                <Badge variant="danger">Danger</Badge>
                                </Col>
                                <Col sm="3">
                                <h5><small>Pill badges</small></h5>
                                <p className="text-muted">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                                <Badge pill  variant="primary" >Default</Badge>
                                <Badge pill  variant="primary" >Primary</Badge>
                                <Badge pill  variant="success" >Success</Badge>
                                <Badge pill  variant="info" >Info</Badge>
                                <Badge pill  variant="warning" >Warning</Badge>
                                <Badge pill  variant="danger" >Danger</Badge>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <Row>
                        <Col sm="12">
                        <Card>
                            <Card.Header>
                            Breadcrumb
                            </Card.Header>
                            <Card.Body>
                            <Row>
                                <Col sm="6">
                                <Breadcrumb>
                                    <Breadcrumb.Item as="li" className="active">Home</Breadcrumb.Item>
                                </Breadcrumb>
                                <Breadcrumb>
                                    <Breadcrumb.Item as="li"><Link to="#be">Home</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li" className="active">Library</Breadcrumb.Item>
                                </Breadcrumb>
                                <Breadcrumb>
                                    <Breadcrumb.Item as="li"><Link to="#be">Home</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li"><Link to="#be">Library</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li" className="active">Data</Breadcrumb.Item>
                                </Breadcrumb>
                                <Breadcrumb>
                                    <Breadcrumb.Item as="li"><Link to="#be">Home</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li"><Link to="#be">Library</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li"><Link to="#be">Data</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li" className="active">Bootstrap</Breadcrumb.Item>
                                </Breadcrumb>
                                </Col>
                                <Col sm="6">
                                <ol className="breadcrumb colored bg-primary">
                                    <Breadcrumb.Item as="li" className="active">Home</Breadcrumb.Item>
                                </ol>
                                <ol className="breadcrumb colored bg-success">
                                    <Breadcrumb.Item as="li"><Link to="#be">Home</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li" className="active">Library</Breadcrumb.Item>
                                </ol>
                                <ol className="breadcrumb colored bg-warning">
                                    <Breadcrumb.Item as="li"><Link to="#be">Home</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li"><Link to="#be">Library</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li" className="active">Data</Breadcrumb.Item>
                                </ol>
                                <ol className="breadcrumb colored bg-danger">
                                    <Breadcrumb.Item as="li"><Link to="#be">Home</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li"><Link to="#be">Library</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li"><Link to="#be">Data</Link></Breadcrumb.Item>
                                    <Breadcrumb.Item as="li" className="active">Bootstrap</Breadcrumb.Item>
                                </ol>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <Row>
                        <Col sm="12">
                        <Card>
                            <Card.Header>
                            Pagination
                            </Card.Header>
                            <Card.Body>
                            <Row>
                                <Col sm="4">
                                <h5><small>Simple pagination</small></h5>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" href="#be">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#be">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#be">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#be">3</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#be">Next</Link></li>
                                    </ul>
                                </nav> 
                                </Col>
                                <Col sm="3">
                                <h5><small>Working with icons</small></h5>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                    <li className="page-item">
                                        <Link className="page-link" href="#be" aria-label="Previous">
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#be">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#be">2</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#be">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#be" aria-label="Next">
                                        <span aria-hidden="true">»</span>
                                        <span className="sr-only">Next</span>
                                        </Link>
                                    </li>
                                    </ul>
                                </nav>                                      
                                </Col>
                                <Col sm="3">
                                <h5><small>Disabled and active states</small></h5>
                                <nav aria-label="...">
                                    <ul className="pagination">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#be" tabIndex={-1}>Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#be">1</Link></li>
                                    <li className="page-item active">
                                        <Link className="page-link" href="#be">2 <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#be">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" href="#be">Next</Link>
                                    </li>
                                    </ul>
                                </nav>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiBootstrapElements;
