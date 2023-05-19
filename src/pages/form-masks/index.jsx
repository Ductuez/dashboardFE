import React from 'react';
import "./index.scss";
import { Row, Col, Card, Form } from 'react-bootstrap';
import InputMask from "react-input-mask";

class FormMasks extends React.Component {

    state = {
        value: '',
        mask: '9999-9999-9999-9999'
    }
    
    onChange = (event) => {
        var value = event.target.value;
        var newState = {
            mask: '9999-9999-9999-9999',
            value: value
        };
        if (/^3[47]/.test(value)) {
            newState.mask = '9999-999999-99999';
        }
        this.setState(newState);
    }
    
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Form Masks Example
                        </Card.Header>
                        <Card.Body>
                            <Form>
                            <Form.Group>
                                <Form.Label>
                                Phones
                                </Form.Label>
                                <Form.Control className="mb-1" readOnly value='<InputMask mask="+4\9 99 999 99" maskChar={null} />'></Form.Control>
                                <InputMask mask="+4\9 99 999 99" maskChar={null} className="form-control" />
                                <Form.Control className="mb-1 mt-1" readOnly value='<InputMask mask="+7 (999) 999-99-99" />'></Form.Control>
                                <InputMask mask="+7 (999) 999-99-99" className="form-control" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                Dates
                                </Form.Label>
                                <Form.Control className="mb-1" readOnly value='<InputMask mask="99-99-9999" defaultValue="10-06-2020" />'></Form.Control>
                                <InputMask mask="99-99-9999" defaultValue="10-06-2020" className="form-control" />
                                <Form.Control className="mb-1 mt-1" readOnly value='<InputMask mask="99/99/9999" placeholder="Enter birthdate" />'></Form.Control>
                                <InputMask mask="99/99/9999" placeholder="Enter birthdate"  className="form-control" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                Credit card <small>(autochange to Amex format if starts with 34 or 37)</small>
                                </Form.Label>
                                <InputMask {...this.state} onChange={this.onChange} className="form-control" />
                            </Form.Group>
              
                                
                            </Form>
                        
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FormMasks;
