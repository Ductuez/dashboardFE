import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class UiTreeview extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Basic tree view
                        </Card.Header>
                        <Card.Body>
                        <div id="basicTree">
                            <ul>
                            <li data-jstree="{&quot;opened&quot;:true}">Admin
                                <ul>
                                <li data-jstree="{&quot;opened&quot;:true}">Html
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Css</li>
                                    <li data-jstree="{&quot;opened&quot;:true}">Plugins
                                        <ul>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Bootstrap</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">chart-c3</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartJs</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">datatables</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropzone</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                        </ul>
                                    </li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">images
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">img1.jpg</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">img2.jpg</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">Js
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">custom.js</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">morris-custom.js</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">scss
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">_variables.scss</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">_button.scss</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Landing page</li>
                            </ul>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Checkbox tree view
                        </Card.Header>
                        <Card.Body>
                        <div id="checkTree">
                            <ul>
                            <li data-jstree="{&quot;opened&quot;:true}">Admin
                                <ul>
                                <li data-jstree="{&quot;opened&quot;:true}">Html
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Css</li>
                                    <li data-jstree="{&quot;opened&quot;:true}">Plugins
                                        <ul>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Bootstrap</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">chart-c3</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartJs</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">datatables</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropzone</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                        </ul>
                                    </li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">images
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">img1.jpg</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">img2.jpg</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">Js
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">custom.js</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">morris-custom.js</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">scss
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">_variables.scss</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">_button.scss</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Landing page</li>
                            </ul>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Drag &amp; drop
                        </Card.Header>
                        <Card.Body>
                        <div id="dragTree">
                            <ul>
                            <li data-jstree="{&quot;opened&quot;:true}">Admin
                                <ul>
                                <li data-jstree="{&quot;opened&quot;:true}">Html
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Css</li>
                                    <li data-jstree="{&quot;opened&quot;:true}">Plugins
                                        <ul>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Bootstrap</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">chart-c3</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartJs</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">datatables</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropzone</li>
                                        <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                        </ul>
                                    </li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">images
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">img1.jpg</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">img2.jpg</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">Js
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">custom.js</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">morris-custom.js</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                <li data-jstree="{&quot;opened&quot;:true}">scss
                                    <ul>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">_variables.scss</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">_button.scss</li>
                                    <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">----</li>
                                    </ul>
                                </li>
                                </ul>
                            </li>
                            <li data-jstree="{&quot;type&quot;:&quot;file&quot;}">Landing page</li>
                            </ul>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiTreeview;
