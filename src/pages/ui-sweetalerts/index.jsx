import React from 'react';
import "./index.scss";
import { Row, Button, Card, Col } from 'react-bootstrap';
import SweetAlert from 'sweetalert2-react';

class UiSweetalerts extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            SweetAlert1: false,
            SweetAlert2: false,
            SweetAlert3: false,
            SweetAlert4: false,
            SweetAlert5: false,
            SweetAlert6: false,
            SweetAlert7: false,
            SweetAlert9: false,
            SweetAlert10: false,
            SweetAlert11: false,
            SweetAlert12: false,
        }
    }
    


    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Sweet Alert 2 Examples 
                        </Card.Header>
                        <Card.Body>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th style={{minWidth: '50%'}}>Alert Type</th>
                                <th>Example</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="middle-align">Basic Example</td>
                                <td>

                                <Button variant="primary" 
                                    onClick={() => this.setState({ SweetAlert1: true })}
                                >
                                    Click me
                                </Button>
                                <SweetAlert
                                    show={this.state.SweetAlert1}
                                    title="Here's a message!"
                                    onEscapeKey={() => this.setState({ SweetAlert1: false })}
                                    onOutsideClick={() => this.setState({ SweetAlert1: false })}
                                />


                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A title with a text under</td>
                                <td>

                                <Button variant="primary" 
                                    onClick={() => this.setState({ SweetAlert2: true })}
                                >
                                    Click me 2
                                </Button>
                                <SweetAlert
                                    show={this.state.SweetAlert2}
                                    title="Here's a message! "
                                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat, tincidunt vitae ipsum et, pellentesque maximus enim. Mauris eleifend ex semper, lobortis purus sed, pharetra felis"
                                    onConfirm={() => this.setState({ SweetAlert2: false })}
                                    onEscapeKey={() => this.setState({ SweetAlert2: false })}
                                    onOutsideClick={() => this.setState({ SweetAlert2: false })}
                                />
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A success message!</td>
                                <td>
                                <Button variant="primary" 
                                    onClick={() => this.setState({ SweetAlert3: true })}
                                >
                                    Click me 3
                                </Button>
                                <SweetAlert
                                    show={this.state.SweetAlert3}
                                    title="Demo Complex"
                                    text="SweetAlert in React"
                                    showCancelButton
                                    onConfirm={() => {
                                    console.log('confirm');
                                    this.setState({ SweetAlert3: false });
                                    }}
                                    onCancel={() => {
                                    console.log('cancel');
                                    this.setState({ SweetAlert3: false });
                                    }}
                                    onEscapeKey={() => this.setState({ SweetAlert3: false })}
                                    onOutsideClick={() => this.setState({ SweetAlert3: false })}
                                />

                                

                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A warning message, with a function attached to the "Confirm"-button...</td>
                                <td>
                                
                                
                            ============

                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">By passing a parameter, you can execute something else for "Cancel".</td>
                                <td>
                                <Button variant="primary" id="sa-params">Click me</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A message with custom Image Header</td>
                                <td>
                                <Button variant="primary" id="sa-image">Click me</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A message with auto close timer</td>
                                <td>
                                <Button variant="primary" id="sa-close">Click me</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A message with button primary</td>
                                <td>
                                <Button variant="primary" id="primary-alert">Click me</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A message with button info</td>
                                <td>
                                <Button variant="info" id="info-alert">Click me</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A message with button success</td>
                                <td>
                                <Button variant="success" id="success-alert">Click me</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A message with button warning</td>
                                <td>
                                <Button variant="warning" id="warning-alert">Click me</Button>
                                </td>
                            </tr>
                            <tr>
                                <td className="middle-align">A message with button danger</td>
                                <td>
                                <Button variant="danger" id="danger-alert">Click me</Button>
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

export default UiSweetalerts;
