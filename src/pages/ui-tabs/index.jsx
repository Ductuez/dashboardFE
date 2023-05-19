import React from 'react';
import "./index.scss";
import { Row, Col, Nav, Tabs, Tab, Card } from 'react-bootstrap';

const Sonnet = () => {
    return (
        <React.Fragment>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lacus ipsum, tempus consequat turpis auctor sit amet. Pellentesque porta mollis nisi, pulvinar convallis tellus tristique nec.
            <br />
            Nam aliquet consequat quam sit amet dignissim. Quisque vel massa est. Donec dictum nisl dolor, ac malesuada tellus efficitur non. Pellentesque pellentesque odio neque, eget imperdiet eros vehicula lacinia.
        </React.Fragment>
    );
}


class UiTabs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>             
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Default Style
                        </Card.Header>
                        <Card.Body>

                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Home">
                                    <Sonnet />
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    <Sonnet />
                                </Tab>
                                <Tab eventKey="Messages" title="Messages">
                                    <Sonnet />
                                </Tab>
                            </Tabs>

                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Bottom Tabs Style
                        </Card.Header>
                        <Card.Body>


                        
                        <Tab.Container id="buttom-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <Sonnet />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <Sonnet />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <Sonnet />
                                    </Tab.Pane>
                                    
                                </Tab.Content>
                                </Col>

                                <Col sm={12}>
                                <Nav variant="pills" className="justify-content-end">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                                </Col>
                            </Row>
                        </Tab.Container>



                        
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Left align
                        </Card.Header>
                        <Card.Body>
                        
                        
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <Sonnet />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <Sonnet />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <Sonnet />
                                    </Tab.Pane>
                                    
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>


                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Right align
                        </Card.Header>
                        <Card.Body>
                        
                                                
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                    <Sonnet />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <Sonnet />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <Sonnet />
                                    </Tab.Pane>
                                    
                                </Tab.Content>
                                </Col>

                                <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                    </Nav.Item>
                                    
                                </Nav>
                                </Col>
                            </Row>
                        </Tab.Container>



                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiTabs;
