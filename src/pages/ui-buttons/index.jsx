import React from 'react';
import "./index.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class UiButtons extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Default Buttons
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">classes <code>btn btn-default</code> for create a default btn.</p>
                        <div className="buttons">
                            <Button as="a" href="#be"  className="btn-default">Default</Button>
                            <Button as="a" href="#be" variant="primary">Primary</Button>
                            <Button as="a" href="#be" variant="indigo">Indigo</Button>
                            <Button as="a" href="#be" variant="teal">Teal</Button>
                            <Button as="a" href="#be" variant="success">Success</Button>
                            <Button as="a" href="#be" variant="info">Info</Button> 
                            <Button as="a" href="#be" variant="danger">Danger</Button>
                            <Button as="a" href="#be" variant="warning">Warning</Button>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Boxshadow Buttons
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">classes <code>btn btn-default btn-rounded box-shadow</code> for create a border btn.</p>
                        <div className="buttons">
                            <Link to="#be" className="btn btn-default btn-rounded box-shadow">Default</Link>
                            <Link to="#be" className="btn btn-primary btn-rounded box-shadow">Primary</Link>
                            <Link to="#be" className="btn btn-indigo btn-rounded box-shadow">Indigo</Link>
                            <Link to="#be" className="btn btn-teal btn-rounded box-shadow">Teal</Link>
                            <Link to="#be" className="btn btn-success btn-rounded box-shadow">Success</Link>
                            <Link to="#be" className="btn btn-info btn-rounded box-shadow">Info</Link> 
                            <Link to="#be" className="btn btn-danger btn-rounded box-shadow">Danger</Link>
                            <Link to="#be" className="btn btn-warning btn-rounded box-shadow">Warning</Link>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Size Buttons
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">classes <code>btn btn-default btn-xs</code> for create a fill size btn.</p>
                        <div className="buttons margin-b-20">
                            <Button as="a" href="#be" variant="primary" size="xs">Small</Button>
                            <Button as="a" href="#be" variant="primary" size="sm">Medium</Button>
                            <Button as="a" href="#be" variant="primary">Default</Button>
                            <Button as="a" href="#be" variant="primary" size="lg">Large</Button>
                        </div>
                        <p className="text-muted margin-b-10">classes <code>btn btn-default btn-border btn-xs</code> for create a border size btn.</p>
                        <div className="buttons margin-b-20">
                            <Link to="#be" className="btn btn-primary btn-border btn-xs">Small</Link>
                            <Link to="#be" className="btn btn-primary btn-border btn-sm">Medium</Link>
                            <Link to="#be" className="btn btn-primary btn-border ">Default</Link>
                            <Link to="#be" className="btn btn-primary btn-border btn-lg ">Large</Link>
                        </div>
                        <div className="buttons">
                            <p className="text-muted margin-b-10">classes <code>btn btn-default btn-border btn-rounded btn-xs</code> for create a border rounded size btn.</p>
                            <Link to="#be" className="btn btn-primary btn-rounded btn-border btn-xs">Small</Link>
                            <Link to="#be" className="btn btn-primary btn-rounded btn-border btn-sm">Medium</Link>
                            <Link to="#be" className="btn btn-primary btn-rounded btn-border ">Default</Link>
                            <Link to="#be" className="btn btn-primary btn-rounded btn-border btn-lg ">Large</Link>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <div className="col ">
                    <Card>
                        <Card.Header>
                        Rounded Buttons
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">classes <code>btn btn-default btn-rounded</code> for create a rounded btn.</p>
                        <div className="buttons margin-b-20">
                            <Link to="#be" className="btn btn-default btn-rounded">Default</Link>
                            <Link to="#be" className="btn btn-primary btn-rounded">Primary</Link>
                            <Link to="#be" className="btn btn-indigo btn-rounded">Indigo</Link>
                            <Link to="#be" className="btn btn-teal btn-rounded">Teal</Link>
                            <Link to="#be" className="btn btn-success btn-rounded">Success</Link>
                            <Link to="#be" className="btn btn-info btn-rounded">Info</Link> 
                            <Link to="#be" className="btn btn-danger btn-rounded">Danger</Link>
                            <Link to="#be" className="btn btn-warning btn-rounded">Warning</Link>                       
                        </div>
                        <div className="buttons">
                            <p className="text-muted margin-b-10">classes <code>btn btn-default  btn-border btn-rounded</code> for create a border rounded btn.</p>
                            <Link to="#be" className="btn btn-default btn-border btn-rounded">Default</Link>
                            <Link to="#be" className="btn btn-primary btn-border btn-rounded">Primary</Link>
                            <Link to="#be" className="btn btn-indigo btn-border btn-rounded">Indigo</Link>
                            <Link to="#be" className="btn btn-teal btn-border btn-rounded">Teal</Link>
                            <Link to="#be" className="btn btn-success btn-border btn-rounded">Success</Link>
                            <Link to="#be" className="btn btn-info btn-border btn-rounded">Info</Link> 
                            <Link to="#be" className="btn btn-danger btn-border btn-rounded">Danger</Link>
                            <Link to="#be" className="btn btn-warning btn-border btn-rounded">Warning</Link>                       
                        </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col ">
                    <Card>
                        <Card.Header>
                        Dropdown Buttons
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">Add dropdown-menu ul list into <code>btn-group</code> </p>
                        <div className="buttons">
                            <div className="btn-group">
                            <button type="button" className="btn btn-default dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li className="dropdown-item"><Link to="#be">Action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Another action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Something else here</Link></li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-item"><Link to="#be">Separated link</Link></li>
                            </ul>
                            </div>
                            <div className="btn-group">
                            <button type="button" className="btn btn-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li className="dropdown-item"><Link to="#be">Action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Another action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Something else here</Link></li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-item"><Link to="#be">Separated link</Link></li>
                            </ul>
                            </div>
                            <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li className="dropdown-item"><Link to="#be">Action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Another action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Something else here</Link></li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-item"><Link to="#be">Separated link</Link></li>
                            </ul>
                            </div>
                            <div className="btn-group">
                            <button type="button" className="btn btn-teal dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret" /></button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li className="dropdown-item"><Link to="#be">Action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Another action</Link></li>
                                <li className="dropdown-item"><Link to="#be">Something else here</Link></li>
                                <li className="dropdown-divider" />
                                <li className="dropdown-item"><Link to="#be">Separated link</Link></li>
                            </ul>
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                    </div>
                </Row>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Icon Buttons
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">Classes <code>btn btn-default  btn-icon</code> and add icon into i tag before text</p>
                        <div className="buttons margin-b-10">
                            <Link to="#be" className="btn btn-primary btn-icon"><i className="fa fa-cloud-download" /> Download</Link>
                            <Link to="#be" className="btn btn-success btn-icon"><i className="fa fa-user" /> Login</Link>
                            <Link to="#be" className="btn btn-danger btn-icon"><i className="fa fa-times" /> Danger</Link>
                            <Link to="#be" className="btn btn-warning btn-icon"><i className="fa fa-warning" /> Warning</Link>
                        </div>
                        <div className="buttons margin-b-20">
                            <Link to="#be" className="btn btn-primary btn-rounded btn-icon"><i className="fa fa-cloud-download" /> Download</Link>
                            <Link to="#be" className="btn btn-success btn-rounded btn-icon"><i className="fa fa-user" /> Login</Link>
                            <Link to="#be" className="btn btn-danger btn-rounded btn-icon"><i className="fa fa-times" /> Danger</Link>
                            <Link to="#be" className="btn btn-warning btn-rounded btn-icon"><i className="fa fa-warning" /> Warning</Link>
                        </div>
                        <div className="buttons">
                            <p>File upload button</p>
                            <div className="fileupload btn btn-primary btn-icon margin-r-5">
                            <i className="fa fa-cloud-upload" />   <span>Upload</span>
                            <input type="file" className="upload" />
                            </div>
                            <div className="fileupload btn btn-success btn-rounded btn-icon">
                            <i className="fa fa-cloud-upload" />   <span>Upload</span>
                            <input type="file" className="upload" />
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Social buttons
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted margin-b-10">Example <code>btn btn-facebook</code> </p>
                        <div className="buttons margin-b-10">
                            <Link to="#be" className="btn btn-facebook"><i className="fa fa-facebook" /></Link>
                            <Link to="#be" className="btn btn-twitter"><i className="fa fa-twitter" /></Link>
                            <Link to="#be" className="btn btn-googleplus"><i className="fa fa-google-plus" /></Link>
                            <Link to="#be" className="btn btn-pinterest"><i className="fa fa-pinterest" /></Link>
                            <Link to="#be" className="btn btn-linkedin"><i className="fa fa-linkedin" /></Link>
                            <Link to="#be" className="btn btn-youtube"><i className="fa fa-youtube" /></Link>
                            <Link to="#be" className="btn btn-dribbble"><i className="fa fa-dribbble" /></Link>
                            <Link to="#be" className="btn btn-github"><i className="fa fa-github" /></Link>
                            <Link to="#be" className="btn btn-skype"><i className="fa fa-skype" /></Link>
                        </div>
                        <div className="buttons margin-b-10">
                            <Link to="#be" className="btn btn-facebook"><i className="fa fa-facebook margin-r-5" /> facebook</Link>
                            <Link to="#be" className="btn btn-twitter"><i className="fa fa-twitter margin-r-5" /> twitter</Link>
                            <Link to="#be" className="btn btn-googleplus"><i className="fa fa-google-plus margin-r-5" /> google plus</Link>
                            <Link to="#be" className="btn btn-pinterest"><i className="fa fa-pinterest margin-r-5" /> pinterest</Link>
                            <Link to="#be" className="btn btn-linkedin"><i className="fa fa-linkedin margin-r-5" /> linkedin</Link>
                            <Link to="#be" className="btn btn-youtube"><i className="fa fa-youtube margin-r-5" /> youtube</Link>
                            <Link to="#be" className="btn btn-dribbble"><i className="fa fa-dribbble margin-r-5" /> dribbble</Link>
                            <Link to="#be" className="btn btn-github"><i className="fa fa-github margin-r-5" /> github</Link>
                            <Link to="#be" className="btn btn-skype"><i className="fa fa-skype margin-r-5" /> skype</Link>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiButtons;
