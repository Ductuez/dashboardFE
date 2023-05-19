import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class UiDraggableCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row id="sortable-view">
                    <Col sm="6">
                    <Card>
                        <div className="card-header sortable-title">
                        Drag me 1
                        </div>
                        <Card.Body>
                        <p className="margin-b-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p> 
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header sortable-title">
                        Drag me 2
                        </div>
                        <Card.Body>
                        <p className="margin-b-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p> 
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="6">
                    <Card>
                        <div className="card-header sortable-title">
                        Drag me 3
                        </div>
                        <Card.Body>
                        <p className="margin-b-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p> 
                        </Card.Body>
                    </Card>
                    <Card>
                        <div className="card-header sortable-title">
                        Drag me 4
                        </div>
                        <Card.Body>
                        <p className="margin-b-0">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </p> 
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiDraggableCards;
