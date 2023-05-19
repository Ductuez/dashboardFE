import React, {useState} from 'react';
import "./index.scss";
import { Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class FormPicker extends React.Component {
    
    render() {
        return (
            <React.Fragment>
                <Row>             
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Date Range Picker
                        </Card.Header>
                        <Card.Body>
                        <Row>
                            <Col md="6">
                            <h5><small>Default</small></h5>
                            <Form.Group>
                                <InputGroup className="m-b">
                                    {() => {
                                        const [startDate, setStartDate] = useState(new Date());
                                        return (
                                            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                        );
                                    }}
                                </InputGroup>
                            </Form.Group>
                            </Col>
                            <Col md="6">
                            <h5><small>No Anchor Arrow</small></h5>
                            <Form.Group>
                                <InputGroup className="m-b">	
                                <InputGroup.Prepend>
                                <i className="glyphicon glyphicon-calendar fa fa-calendar" />
                                </InputGroup.Prepend>
                                    {() => {
                                        const [startDate, setStartDate] = useState(new Date());
                                        return (
                                            <DatePicker
                                            showPopperArrow={false}
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            />
                                        );
                                    }}
                                </InputGroup>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                            <h5><small>Single Date Picker</small></h5>
                            <Form.Group>
                                <InputGroup className="m-b">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-calendar fa fa-calendar" /></span>
                                <input type="text" name="birthdate" defaultValue="10/24/1984" />
                                </InputGroup>
                            </Form.Group>
                            </Col>
                            <Col md="6">
                            <h5><small>Input Initially Empty</small></h5>
                            <Form.Group>
                                <InputGroup className="m-b">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-calendar fa fa-calendar" /></span>
                                <input type="text" name="datefilter" defaultValue />
                                </InputGroup>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                            <h5><small>Predefined Ranges</small></h5>
                            <Form.Group>
                                <div id="reportrange" className="float-right" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc', width: '100%'}}>
                                <i className="glyphicon glyphicon-calendar fa fa-calendar" />&nbsp;
                                <span /> <b className="caret" />
                                </div>
                            </Form.Group>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>             
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Clock Picker
                        </Card.Header>
                        <Card.Body>
                        <Row>
                            <Col md="6">
                            <h5><small>Default</small></h5>
                            <Form.Group>
                                <div className="input-group clockpicker">
                                <Form.Control  type="text"  defaultValue="09:30" />
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-time fa fa-clock-o" />
                                </span>
                                </div>
                            </Form.Group>
                            </Col>
                            <Col md="6">
                            <h5><small>Place at left, align the arrow to top, auto close</small></h5>
                            <Form.Group>
                                <div className="input-group clockpicker" data-placement="left" data-align="top" data-autoclose="true">
                                <Form.Control  type="text"  defaultValue="13:14" />
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-time fa fa-clock-o" />
                                </span>
                                </div>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                            <h5><small>Set options in javascript, instead of <code>data-*</code></small></h5>
                            <Form.Group>
                                <div className="input-group clockpicker2">
                                <Form.Control  type="text"  defaultValue="18:00" />
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-time fa fa-clock-o" />
                                </span>
                                </div>
                            </Form.Group>
                            </Col>
                            <Col md="6">
                            <h5><small>Set default value, input without addon, and manual operations</small></h5>
                            <Form.Group>
                                <InputGroup>
                                <Form.Control  id="single-input" defaultValue placeholder="Now" />
                                <button type="button" id="check-minutes" className="btn btn-primary">Check the minutes</button>
                                </InputGroup>
                            </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">
                            <h5><small>Callbacks</small></h5>
                            <Form.Group>
                                <input className="form-control clockpicker-with-callbacks" id="single-input" defaultValue placeholder="Now" />
                            </Form.Group>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FormPicker;
