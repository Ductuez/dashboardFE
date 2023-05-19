import React from 'react';
import JoditEditor from "jodit-react";
import "./index.scss";
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ExampleJoditEditor = () => {
	const editor = React.useRef(null)
	const [content, setContent] = React.useState('')
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
	
	return (
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		        tabIndex={1} // tabIndex of textarea
		        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        );
}

class CorporateAdd extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="alert bg-success alert-dismissible" role="alert"> 
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span></button> <strong>Success!</strong> Page successfully added.. 
                </div>
                    <Row>
                        <Col sm="12">
                        <Card>
                            <Card.Header>
                            Add Pages
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the <code>printing and typesetting</code> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </Card.Header>
                            <Card.Body>
                            <Form method="get" action className="form-horizontal">
                                <Form.Group>
                                <label>Menu Position</label>
                                <select name="account" className="form-control m-b">
                                    <option>Header Menu</option>
                                    <option>Footer Menu</option>
                                    <option>Side Menu</option>
                                </select>
                                </Form.Group>
                                <Form.Group>
                                <label>Page Name</label>
                                <input type="text" placeholder="Page name" className="form-control" />
                                </Form.Group>
                                <Form.Group>
                                <label>Slug</label>
                                <input type="text" placeholder="Page slug" className="form-control" />
                                <small className="text-muted">Sample : <code>corporate-page</code></small>
                                </Form.Group>
                                <Form.Group>
                                <label>Content</label>

                                
                                <ExampleJoditEditor />
                                </Form.Group>
                                <Form.Group>
                                <label>Featured Image</label>
                                <div className="fileinput-new" data-provides="fileinput">
                                    <div className="fileinput-preview" data-trigger="fileinput" style={{width: 200, height: 150}} />
                                    <span className="btn btn-primary  btn-file">
                                    <span className="fileinput-new">Select</span>
                                    <span className="fileinput-exists">Change</span>
                                    <input type="file" id="image" name="image" />
                                    </span>
                                    <Link to="#be" className="btn btn-danger fileinput-exists" data-dismiss="fileinput">Remove</Link>
                                </div>
                                </Form.Group>
                                <div className>
                                Meta Settings
                                <p className="text-muted">Lorem Ipsum is simply dummy text of the <code>printing and typesetting</code> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <hr />
                                <Form.Group>
                                <label>Title</label>
                                <input type="text" placeholder="Page title" className="form-control form-control-rounded" />
                                </Form.Group>
                                <Form.Group>
                                <label>Description</label>

                                <input type="text" placeholder="Page description" className="form-control form-control-rounded" />
                                
                                
                                </Form.Group>
                                <Form.Group>
                                <label>Keywords</label>
                                <input type="text" placeholder="Page keywords" className="form-control form-control-rounded" />
                                <small className="text-muted">Sample : <code>apple, pear, banana, wholesale</code></small>
                                </Form.Group>
                                <Form.Group>
                                <label>Published</label>
                                <Row>
                                    <div className="radio radio-success">
                                    <input type="radio" name="radio4" id="radio12" defaultValue="option4" defaultChecked />
                                    <label htmlFor="radio12"> Yes </label>
                                    </div>
                                    <div className="radio radio-danger">
                                    <input type="radio" name="radio4" id="radio13" defaultValue="option4" />
                                    <label htmlFor="radio13"> No </label>
                                    </div>
                                </Row>
                                </Form.Group> 
                                <Button as={Link} to="#be" variant="success" className="btn-icon"><i className="fa fa-floppy-o " />Save</Button>
                                <Button as={Link} to="#be" variant="warning" className="btn-icon"><i className="fa fa-reply" />Back</Button>
                                <Button as={Link} to="#be" variant="danger" className="btn-icon"><i className="fa fa-times" />Cancel</Button>		
                            </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default CorporateAdd;
