import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class UiProgress extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Basic Example
                        </Card.Header>
                        <Card.Body>
                        <div className="progress-info text-muted">Current Status <span className="float-right">25%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">TaskLists <span className="float-right">50%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">To Do List <span className="float-right">75%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">Bugs <span className="float-right">85%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">Completed <span className="float-right">100%</span></div>
                        <div className="progress">
                            <div className="progress-bar btn-indigo" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Basic Example
                        </Card.Header>
                        <Card.Body>
                        <div className="progress-info text-muted">Current Status <span className="float-right">25%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                        </div>
                        <div className="progress-info text-muted">TaskLists <span className="float-right">50%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                        </div>
                        <div className="progress-info text-muted">To Do List <span className="float-right">75%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                        </div>
                        <div className="progress-info text-muted">Bugs <span className="float-right">85%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                        </div>
                        <div className="progress-info text-muted">Completed <span className="float-right">100%</span></div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Animated Example
                        </Card.Header>
                        <Card.Body>
                        <div className="progress-info text-muted">Current Status <span className="float-right">25%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">TaskLists <span className="float-right">50%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">To Do List <span className="float-right">75%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">Bugs <span className="float-right">85%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="progress-info text-muted">Completed <span className="float-right">100%</span></div>
                        <div className="progress">
                            <div className="progress-bar btn-indigo progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Animated Example
                        </Card.Header>
                        <Card.Body>
                        <div className="progress-info text-muted">Current Status <span className="float-right">25%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                        </div>
                        <div className="progress-info text-muted">TaskLists <span className="float-right">50%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                        </div>
                        <div className="progress-info text-muted">To Do List <span className="float-right">75%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                        </div>
                        <div className="progress-info text-muted">Bugs <span className="float-right">85%</span></div>
                        <div className="progress margin-b-20">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                        </div>
                        <div className="progress-info text-muted">Completed <span className="float-right">100%</span></div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>100%</div>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiProgress;
