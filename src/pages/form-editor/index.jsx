import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class FormEditor extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Wysihtml5 text editor
                        </Card.Header>
                        <Card.Body>
                        <form>
                            <textarea className="form-control" id="textarea" rows={10} style={{height: 300}} defaultValue={""} />
                        </form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Summernote Standard editor
                        </Card.Header>
                        <Card.Body>
                        <div className="summernote">
                            <h3>Hello Rakesh! </h3>
                            <p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                            <br /><br />All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                            recently with.</p><p>Mark Smith
                            </p>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Summernote with custom toolbar
                        </Card.Header>
                        <Card.Body>
                        <div className="summernote1">
                            <h4>It is a long established fact</h4>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p><p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)with.</p>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>         
                </Row>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Summernote Airmode
                        </Card.Header>
                        <Card.Body>
                        <div className="summernote2">
                            <h4>It is a long established fact</h4>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p><p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)with.</p>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FormEditor;
