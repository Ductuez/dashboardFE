import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class FormFileUpload extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Card>
                        <Card.Header>
                        Drag &amp; drop file upload
                        </Card.Header>
                        <Card.Body>
                        <form id="my-awesome-dropzone" action="#be" className="dropzone">
                            <button type="submit" className="btn btn-primary btn-rounded box-shadow float-right">Submit!</button>
                        </form>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FormFileUpload;
