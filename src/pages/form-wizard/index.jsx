import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class FormWizard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Basic Steps
                        </Card.Header>
                        <Card.Body>
                        <div id="example-basic">
                            <h3>Step</h3>
                            <section>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </section>
                            <h3>Step</h3>
                            <section>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                            </section>
                            <h3>Step</h3>
                            <section>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </section>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Basic Form Steps
                        </Card.Header>
                        <Card.Body>
                        <form id="example-form" action="#">
                            <div>
                            <h3>Account</h3>
                            <section>
                                <label htmlFor="userName">Username *</label>
                                <input id="userName" name="userName" type="text" className="required" />
                                <label htmlFor="password">Password *</label>
                                <input id="password" name="password" type="text" className="required" />
                                <label htmlFor="confirm">Confirm Password *</label>
                                <input id="confirm" name="confirm" type="text" className="required" />
                                <p>(*) Mandatory</p>
                            </section>
                            <h3>Profile</h3>
                            <section>
                                <label htmlFor="name">First name *</label>
                                <input id="name" name="name" type="text" className="required" />
                                <label htmlFor="surname">Last name *</label>
                                <input id="surname" name="surname" type="text" className="required" />
                                <label htmlFor="email">Email *</label>
                                <input id="email" name="email" type="text" className="required email" />
                                <label htmlFor="address">Address</label>
                                <input id="address" name="address" type="text" />
                                <p>(*) Mandatory</p>
                            </section>
                            <h3>Hints</h3>
                            <section>
                                <ul>
                                <li>Foo</li>
                                <li>Bar</li>
                                <li>Foobar</li>
                                </ul>
                            </section>
                            <h3>Finish</h3>
                            <section>
                                <input id="acceptTerms" name="acceptTerms" type="checkbox" className="required" /> <label htmlFor="acceptTerms">I agree with the Terms and Conditions.</label>
                            </section>
                            </div>
                        </form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Vertical Steps
                        </Card.Header>
                        <Card.Body>
                        <div id="example-vertical">
                            <h3>Keyboard</h3>
                            <section>
                            <p>Try the keyboard navigation by clicking arrow left or right!</p>
                            </section>
                            <h3>Effects</h3>
                            <section>
                            <p>Wonderful transition effects.</p>
                            </section>
                            <h3>Pager</h3>
                            <section>
                            <p>The next and previous buttons help you to navigate through your content.</p>
                            </section>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FormWizard;
