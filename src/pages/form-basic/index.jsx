import React from 'react';
import "./index.scss";
import { Row, Col, Form, Card,Button, InputGroup } from 'react-bootstrap';


class FormBasic extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Form elements
                        </Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Rounded Corners</Form.Label>
                                <Form.Control type="text" className="Form-control-rounded" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>With help</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">A block of help text that breaks onto a new line and may extend beyond one line.</Form.Text>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Label focus</Form.Label>
                            <Form.Control id="input-id-1" type="text" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password"/>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Placeholder</Form.Label>
                            <Form.Control type="text" placeholder="placeholder" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Disabled</Form.Label>
                            <Form.Control type="text" placeholder="Disabled input here..." disabled />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Static control</Form.Label>
                            <p className="Form-control-static">email@example.com</p>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Select</Form.Label>
                            <Form.Control as="select" name="account" className="m-b">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                            </Form.Control>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Custom Checkboxes &amp; radios</Form.Label>
                            <Row>
                                <Col>
                                <div className="checkbox checkbox-primary margin-r-5">
                                    <input id="checkbox1" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox1"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-danger margin-r-5">
                                    <input id="checkbox2" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox2"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-info margin-r-5">
                                    <input id="checkbox3" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox3"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-warning margin-r-5">
                                    <input id="checkbox4" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox4"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-success margin-r-5">
                                    <input id="checkbox5" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox5"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-purple margin-r-5">
                                    <input id="checkbox6" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox6"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-red margin-r-5">
                                    <input id="checkbox7" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox7"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-inverse margin-r-5">
                                    <input id="checkbox8" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="checkbox8"> Option one </Form.Label>
                                </div>
                                </Col>
                                <Col>
                                <div className="radio radio-primary">
                                    <input type="radio" name="radio4" id="radio1" defaultValue="option4" defaultChecked />
                                    <Form.Label htmlFor="radio1"> Option one </Form.Label>
                                </div>
                                <div className="radio radio-danger">
                                    <input type="radio" name="radio4" id="radio2" defaultValue="option4" />
                                    <Form.Label htmlFor="radio2"> Option one </Form.Label>
                                </div>
                                <div className="radio radio-info">
                                    <input type="radio" name="radio4" id="radio3" defaultValue="option4" />
                                    <Form.Label htmlFor="radio3"> Option one </Form.Label>
                                </div>
                                <div className="radio radio-warning">
                                    <input type="radio" name="radio4" id="radio4" defaultValue="option4" />
                                    <Form.Label htmlFor="radio4"> Option one </Form.Label>
                                </div>
                                <div className="radio radio-success">
                                    <input type="radio" name="radio4" id="radio5" defaultValue="option4" />
                                    <Form.Label htmlFor="radio5"> Option one </Form.Label>
                                </div>
                                <div className="radio radio-purple">
                                    <input type="radio" name="radio4" id="radio6" defaultValue="option4" />
                                    <Form.Label htmlFor="radio6"> Option one </Form.Label>
                                </div>
                                <div className="radio radio-red">
                                    <input type="radio" name="radio4" id="radio7" defaultValue="option4" />
                                    <Form.Label htmlFor="radio7"> Option one </Form.Label>
                                </div>
                                <div className="radio radio-inverse">
                                    <input type="radio" name="radio4" id="radio8" defaultValue="option4" />
                                    <Form.Label htmlFor="radio8"> Option one </Form.Label>
                                </div>
                                </Col>
                            </Row>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Inline checkboxes</Form.Label>
                            <div className="Form-inline">
                                <div className="checkbox checkbox-inline checkbox-success">
                                <input id="checkbox10" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="checkbox10"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-inline checkbox-primary mx-sm-3">
                                <input id="checkbox11" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="checkbox11"> Option one </Form.Label>
                                </div>
                                <div className="checkbox checkbox-inline checkbox-danger">
                                <input id="checkbox12" type="checkbox" defaultChecked />
                                <Form.Label htmlFor="checkbox12"> Option one </Form.Label>
                                </div>
                            </div>
                            </Form.Group>
                            <div className="Form-group has-success">
                            <Form.Label>Input with success</Form.Label>
                            <Form.Control type="text" />
                            </div>
                            <div className="Form-group has-warning">
                            <Form.Label>Input with warning</Form.Label>
                            <Form.Control type="text" />
                            </div>
                            <div className="Form-group has-error">
                            <Form.Label>Input with error</Form.Label>
                            <Form.Control type="text" />
                            </div>
                            <Form.Group>
                            <Form.Label>Control sizing</Form.Label>
                            <Form.Control type="text" placeholder=".input-lg" className="Form-control input-lg m-b" />
                            <br />
                            <Form.Control type="text" placeholder="Default input" className="Form-control m-b" />
                            <br />
                            <Form.Control type="text" placeholder=".input-sm" className="Form-control input-sm" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Column sizing</Form.Label>
                            <Row>
                                <Col md="2">
                                <Form.Control type="text" placeholder=".col-md-2" />
                                </Col>
                                <Col md="3">
                                <Form.Control type="text" placeholder=".col-md-3" />
                                </Col>
                                <Col md="4">
                                <Form.Control type="text" placeholder=".col-md-4" />
                                </Col>
                            </Row>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Input groups</Form.Label>
                            <InputGroup className="m-b">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" placeholder="Username" />
                            </InputGroup>
                            <br />
                            <InputGroup className="m-b">
                                <Form.Control type="text" />
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">.00</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                            <br />
                            <InputGroup className="m-b">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" />
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">.00</InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                            <br />
                            <InputGroup className="m-b">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                    <Form.Check
                                        type="checkbox"
                                        id="checkboxrf444"
                                    />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control type="text" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroup.Text>
                                    <Form.Check
                                        type="radio"
                                        id="checkboxrf4445"
                                    />
                                </InputGroup.Text>
                                <Form.Control type="text" />
                            </InputGroup>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Button addons</Form.Label>
                            <InputGroup className="m-b">
                                <span className="input-group-btn">
                                <button type="button" className="btn btn-default">Go!</button>
                                </span>
                                <Form.Control />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <Form.Control />
                                <span className="input-group-btn">
                                <button type="button" className="btn btn-default">Go!</button>
                                </span>
                            </InputGroup>
                            </Form.Group>
                           
                        </Form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>Inline Form</Card.Header>
                        <Card.Body>
                        <Form inline>
                            <Form.Group>
                            <Form.Label htmlFor="input-email" className="sr-only">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Type your email" className="Form-control" />
                            </Form.Group>
                            <Form.Group className="mx-sm-3">
                            <Form.Label htmlFor="input-password" className="sr-only">Password</Form.Label>
                            <Form.Control type="password" placeholder="Type your password" className="Form-control" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="checkbox22"
                                label="Remember Me"
                                custom
                            />
                            </Form.Group>
                            <Button type="submit" className="margin-l-5 mx-sm-3">Sign in</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                    <Card>
                        <Card.Header>Stacked Form</Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="customControlInline"
                                label="Remember my preference"
                                custom
                            />
                            </Form.Group>
                            <Button type="submit" className="btn-sm">Sign in</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="6">
                    <Card>
                        <Card.Header>Horizontal Form</Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group className="row">
                            <Form.Label htmlFor="inputEmail3" className="col-sm-2 ">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Email" />
                            </Col>
                            </Form.Group>
                            <Form.Group className="row">
                            <Form.Label htmlFor="inputEmail3" className="col-sm-2 ">Password</Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" className="Form-control" />
                            </Col>
                            </Form.Group>
                            <Form.Group>
                            <Form.Check
                                type="checkbox"
                                className="my-1 mr-sm-2"
                                id="checkbox20"
                                label="Remember Me"
                                custom
                            />
                            </Form.Group>
                            <Button type="submit" className="btn-sm">Sign in</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FormBasic;
