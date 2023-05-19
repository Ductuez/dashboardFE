import React from 'react';
import "./index.scss";
import { Row, Col, Card, Alert, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AlertDismissibleExample2 = (props ) => {
    const [show, setShow] = React.useState(true);
  
    if (show) {
      return (
        <Alert className={`'bg-'${props.variant}`} key={ props.idx } variant={ props.variant } onClose={() => setShow(false)} dismissible>
           {props.variant} ! This is an example top alert. You can edit what u wish..
        </Alert>
      );
    }
    return <Button  variant={props.variant} onClick={() => setShow(true)} block>Show Alert</Button>;
  }

  const AlertDismissibleExample = (props ) => {
    const [show, setShow] = React.useState(true);
  
    if (show) {
      return (
        <Alert key={ props.idx } variant={ props.variant } onClose={() => setShow(false)} dismissible>
           {props.variant} ! This is an example top alert. You can edit what u wish..
        </Alert>
      );
    }
    return <Button  variant={props.variant} onClick={() => setShow(true)} block>Show Alert</Button>;
  }

  
class UiNotification extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Simple alerts
                        </Card.Header>
                        <Card.Body>

                        {[
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                            ].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                {variant} ! This is an example top alert. You can edit what u wish..
                            </Alert>
                        ))}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Simple Links alerts
                        </Card.Header>
                        <Card.Body>

                        {[
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                            ].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                                This is a {variant} alert with{' '}
                                <Alert.Link href="#be">an example link</Alert.Link>. Give it a click if you
                                like.
                            </Alert>
                        ))}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Dismiss Alerts
                        </Card.Header>
                        <Card.Body>

                        {[
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                            ].map((variant, idx) => (
                            <AlertDismissibleExample idx={idx} variant={variant} />
                        ))}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                
                
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Simple alerts
                        </Card.Header>
                        <Card.Body>
                        {[
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                            ].map((variant, idx) => (
                            <Alert key={idx} variant={variant} className={`'bg-'${variant}`}>
                                <strong>{variant} !</strong> This is an example top alert. You can edit what u wish..
                            </Alert>
                        ))}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card>
                        <Card.Header>
                        Dismiss alerts
                        </Card.Header>
                        <Card.Body>
                        {[
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                            ].map((variant, idx) => (
                            <AlertDismissibleExample2 idx={idx} variant={variant} />
                        ))}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Toastr alerts
                        </Card.Header>
                        <Card.Body>
                        <div className="buttons">

                        
                        <button className="btn btn-info mr-1"
                            onClick={ () => toast.info(' Wow so easy!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            })}
                        >Info Message</button>

                        <button className="btn btn-warning mr-1"
                            onClick={ () => toast.warn(' Wow so easy!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            })}
                        >Warning Message</button>

                        <button className="btn btn-success mr-1"
                            onClick={ () => toast.success(' Wow so easy!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            })}
                        >Success Message</button>

                        <button className="btn btn-danger mr-1"
                            onClick={ () => toast.error(' Wow so easy!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            })}
                        >Error Message</button>

                           
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiNotification;
