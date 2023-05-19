import React from 'react';
import JoditEditor from "jodit-react";
import "./index.scss";
import { Row, Col, Card, Form } from 'react-bootstrap';
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

class EcommerceAdd extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className="alert bg-success alert-dismissible " role="alert"> <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>Success!</strong> Product successfully added. </div>
                    <Row>
                        <Col>
                        <Card>
                            <Card.Header>
                            Add Products
                            <p className="text-muted">Lorem ipsum dolor sit amet</p>
                            </Card.Header>
                            <Card.Body>
                            <form method="get" action className="form-horizontal">
                                <Form.Group>
                                <label>Product Name</label>
                                <input type="text" placeholder="New product name" className="form-control form-control-rounded" />
                                </Form.Group>
                                <Form.Group>
                                <label>Main Category</label>
                                <select name="account" className="form-control m-b">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                    <option>Option 4</option>
                                </select>
                                <small className="text-muted">Lorem ipsum dolor sit amet</small>
                                </Form.Group>
                                <Form.Group>
                                <label>Current Price</label>
                                <div className="input-group col-md-4">
                                    <span className="input-group-addon">$</span>
                                    <Form.Control  type="text"  />
                                    <span className="input-group-addon">.00</span>
                                </div>     	
                                </Form.Group>
                                <Form.Group>
                                <label>Previous Price</label>
                                <div className="input-group col-md-4">
                                    <span className="input-group-addon">$</span>
                                    <Form.Control  type="text"  />
                                    <span className="input-group-addon">.00</span>
                                </div>
                                </Form.Group>
                                <Form.Group>
                                <label>Stock</label>
                                <input type="text" className="form-control form-control-rounded col-md-4" />
                                </Form.Group>
                                <Form.Group>
                                <label>Description</label>

       
                                <ExampleJoditEditor/>
                                
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
                                <Form.Group>
                                <label>Gallery Images</label>
                                <div className="fileinput fileinput-new input-group col-md-3" data-provides="fileinput">
                                    <div className="form-control" data-trigger="fileinput"><span className="fileinput-filename" /></div>
                                    <span className="input-group-addon btn btn-primary btn-file ">
                                    <span className="fileinput-new">Select</span>
                                    <span className="fileinput-exists">Change</span>
                                    <input type="file" name="image" />
                                    </span>
                                    <Link to="#be" className="input-group-addon btn btn-danger  hover fileinput-exists" data-dismiss="fileinput">Remove</Link>
                                </div>
                                </Form.Group>
                                <Form.Group>
                                <label>Status</label>
                                <Row>
                                    <div className="radio radio-success">
                                    <input type="radio" name="radio4" id="radio12" defaultValue="option4" defaultChecked />
                                    <label htmlFor="radio12"> Stock </label>
                                    </div>
                                    <div className="radio radio-danger">
                                    <input type="radio" name="radio4" id="radio13" defaultValue="option4" />
                                    <label htmlFor="radio13"> Removed </label>
                                    </div>
                                    <div className="radio radio-warning">
                                    <input type="radio" name="radio4" id="radio14" defaultValue="option4" />
                                    <label htmlFor="radio14"> Out of Stock </label>
                                    </div>
                                </Row>
                                </Form.Group>
                                <Link to="#be" className="btn btn-success btn-icon"><i className="fa fa-floppy-o " />Save</Link>
                                <Link to="#be" className="btn btn-warning btn-icon"><i className="fa fa-reply" />Back</Link>
                                <Link to="#be" className="btn btn-danger btn-icon"><i className="fa fa-times" />Cancel</Link>		
                            </form>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>

            </React.Fragment>
        );
    }
}

export default EcommerceAdd;
