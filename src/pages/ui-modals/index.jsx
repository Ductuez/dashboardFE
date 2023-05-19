import React from 'react';
import "./index.scss";
import { Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';

const LoginModal = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow} className="margin-r-5">
                Login Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                        <Form.Control type="email" placeholder="Username" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="clearfix">
                        <div className="checkbox checkbox-inline checkbox-primary">
                            <input id="checkbox11" type="checkbox" defaultChecked />
                            <label htmlFor="checkbox11"> Option one </label>
                        </div>
                        <button type="button" className="btn  btn-primary float-right">Login</button>
                        </div>
                    </Form>
                    <hr />
                    <div className="text-center">
                        <p><a href="#be">Forget</a> password?</p>
                        <p>Don't have an Account, <a href="#be">Login</a></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}


const SignUpModal = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="primary" onClick={handleShow} className="margin-r-5">
            Sign Up Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Row>
                        <Col sm="6">
                            <Form.Group>
                            <Form.Control  type="text"  placeholder="Username" />
                            </Form.Group>
                        </Col>
                        <Col sm="6">
                            <Form.Group>
                            <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <Row>
                        <Col sm="6">
                            <Form.Group>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col sm="6">
                            <Form.Group>
                            <Form.Control type="password" placeholder="Reset Password" />
                            </Form.Group>
                        </Col>
                        </Row>
                        <div className="clearfix">
                        <div className="checkbox checkbox-inline checkbox-primary">
                            <input id="checkbox11" type="checkbox" defaultChecked />
                            <label htmlFor="checkbox11"> Option one </label>
                        </div>
                        <button type="button" className="btn btn-primary float-right">Signup</button>
                        </div>
                    </form>
                    <hr />
                    <div className="text-center">
                        <p>Already have an Account, <a href="#be">Login</a></p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}


const TextModal = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button onClick={handleShow}  className="btn-teal margin-r-5">
            Text Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                        <p>
                            We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desireWe denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire  
                        </p><br />
                        <div className="text-center">
                            <a href="#be" className="btn btn-primary btn-lg">Get free trail</a>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}


const VideoModal = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="warning" onClick={handleShow} className="margin-r-5">
            Video Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src="https://player.vimeo.com/video/425216489" title="4fsr_title"></iframe>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}



const ModalSmallSize = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="indigo" onClick={handleShow} className="margin-r-5">
            Small Modal
            </Button>

            <Modal show={show} onHide={handleClose}
                size="sm"
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}



const ModalDefaultSize = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="danger" onClick={handleShow} className="margin-r-5">
            Default Modal
            </Button>

            <Modal 
                show={show} 
                onHide={handleClose}

            >
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}



const ModalLargeSize = () => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Button variant="teal" onClick={handleShow} className="margin-r-5">
            Large Modal
            </Button>

            <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>  
        </React.Fragment>
    );

}

class UiModals extends React.Component {
    render() {
        
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Bootstrap Popup Modals 
                        </Card.Header>
                        <Card.Body>
                        <LoginModal />
                        <SignUpModal />
                        <TextModal />
                        <VideoModal />
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Modals Size
                        </Card.Header>
                        <Card.Body>
                            <ModalSmallSize />
                            <ModalDefaultSize />
                            <ModalLargeSize />
                                
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiModals;
