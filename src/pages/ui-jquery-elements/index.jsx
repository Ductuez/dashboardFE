import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class UiJqueryElements extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col sm="12">
                    <Row>
                        <Col sm="12">
                        <Card>
                            <Card.Header>
                            Jquery UI Select boxes
                            </Card.Header>
                            <Card.Body>
                            <Row>
                                <Col sm="4">
                                <fieldset className="jquery-Ui-fieldset">
                                    <label htmlFor="simple">Default style</label>
                                    <select name="simple" id="simple">
                                    <option>Slower</option>
                                    <option>Slow</option>
                                    <option selected="selected">Medium</option>
                                    <option>Fast</option>
                                    <option>Faster</option>
                                    </select>
                                </fieldset>
                                </Col>
                                <Col sm="4">
                                <fieldset className="jquery-Ui-fieldset">
                                    <label htmlFor="optgroup">Option groups</label>
                                    <select name="optgroup" id="optgroup">
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="FL">Florida</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                    </select>
                                </fieldset>
                                </Col>
                                <Col sm="4">
                                <fieldset className="jquery-Ui-fieldset">
                                    <label htmlFor="disabled">Disabled style</label>
                                    <select name="disabled" disabled="disabled" id="disabled">
                                    <option>Slower</option>
                                    <option>Slow</option>
                                    <option selected="selected">Medium</option>
                                    <option>Fast</option>
                                    <option>Faster</option>
                                    </select>
                                </fieldset>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="4">
                                <fieldset className="jquery-Ui-fieldset">
                                    <label htmlFor="select-icons">With custom icons</label>
                                    <select name="select-icons" id="select-icons">                 
                                    <optgroup label="Browsers">
                                        <option value="chrome" data-icon="fa-chrome" selected="selected">Chrome</option>
                                        <option value="firefox" data-icon="fa-firefox">Firefox</option>
                                        <option value="safari" data-icon="fa-safari">Safari</option>
                                        <option value="opera" data-icon="fa-opera">Opera</option>
                                        <option value="IE" data-icon="fa-internet-explorer">IE</option>
                                    </optgroup>
                                    </select>
                                </fieldset>
                                </Col>
                                <Col sm="4">
                                <fieldset className="jquery-Ui-fieldset">
                                    <label htmlFor="people">Select a Person:</label>
                                    <select name="people" id="people">
                                    <option value={1} data-className="avatar" data-style="background-image: url('http://www.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?d=monsterid&r=g&s=16');">John Resig</option>
                                    <option value={2} data-className="avatar" data-style="background-image: url('http://www.gravatar.com/avatar/e42b1e5c7cfd2be0933e696e292a4d5f?d=monsterid&r=g&s=16');">Tauren Mills</option>
                                    <option value={3} data-className="avatar" data-style="background-image: url('http://www.gravatar.com/avatar/bdeaec11dd663f26fa58ced0eb7facc8?d=monsterid&r=g&s=16');">Jane Doe</option>
                                    </select>
                                </fieldset>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                {/*Drag & drop*/}
                <Row>
                    <Col sm="12">
                    <div className="card " id="drag-default">
                        <Card.Header>
                        Drag &amp; Drop UI
                        <p className="text-muted">Draggables</p>
                        </Card.Header>
                        <Row>
                        <Col>
                            <Card.Body>
                            <h5><small>Default Functionality</small></h5>
                            <p className="text-muted">
                                Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport.
                            </p>
                            <div className=" draggable-element draggable-default"><span>Drag</span></div>
                            <div className=" draggable-element draggable-default"><span>Drag</span></div>
                            <div className=" draggable-element draggable-default"><span>Drag</span></div>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>
                            <h5><small>Cursor style</small></h5>
                            <p className="text-muted">Position the cursor while dragging the object. Use the <code>cursorAt</code> option to specify another location relative to the draggable (specify a pixel value from the top, right, bottom, and/or left).</p>
                            <div className="draggable-element" id="draggable-cursor-move"><span>Move</span></div>
                            <div className="draggable-element" id="draggable-cursor-crosshair"><span>Crosshair</span></div>
                            <div className="draggable-element" id="draggable-cursor-bottom"><span>Bottom</span></div>
                            </Card.Body>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Card.Body>
                            <h5><small>Constrain movement</small></h5>
                            <p className="text-muted">Constrain the movement of each draggable by defining the boundaries of the draggable area. Set the <code>axis</code> option to limit the draggable's path to the x- or y-axis, or use the <code>containment</code> option to specify a parent DOM element or a jQuery selector, like 'document.'</p>
                            <div className="draggable-element" id="draggable-move-both"><span>Both</span></div>
                            <div className="draggable-element" id="draggable-move-vertical"><span>Vertical</span></div>
                            <div className="draggable-element" id="draggable-move-horizontal"><span>Horizontal</span></div>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>
                            <h5><small>Revert position</small></h5>
                            <p className="text-muted">Return the draggable (or it's helper) to its original location when dragging stops with the boolean <code>revert</code> option.</p>
                            <div className="draggable-element" id="draggable-revert-element"><span>Element</span></div>
                            <div className="draggable-element" id="draggable-revert-clone"><span>Clone</span></div>
                            <div className="draggable-element" id="draggable-revert-speed"><span>Speed</span></div>
                            </Card.Body>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                            <Card.Body>
                            <h5><small>Droppables Default functionality</small></h5>
                            <p className="text-muted">
                                Enable any DOM element to be droppable, a target for draggable elements.
                            </p>
                            <div className="draggable-element" id="droppable-basic-element"><span>Drag me</span></div>
                            <div className="draggable-element droppable-target-element" id="droppable-basic-target"><span>Drop here</span></div>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>
                            <h5><small>Droppables Accept not accept</small></h5>
                            <p className="text-muted">Specify using the <code>accept</code> option which element (or group of elements) is accepted by the target droppable.</p>
                            <div className="draggable-element" id="droppable-accept-yes"><span>Accept</span></div>
                            <div className="draggable-element" id="droppable-accept-no"><span>Not accept</span></div>
                            <div className="draggable-element droppable-target-element" id="droppable-accept-target"><span>Drop here</span></div>
                            </Card.Body>
                        </Col>
                        </Row>
                    </div>
                    </Col>
                </Row>
                {/*end drag & drop*/}
                {/*Modal dialogs*/}
                <Row>
                    <Col sm="12">
                    <Row>
                        <Col sm="12">
                        <Card>
                            <Card.Header>
                            Modal dialog
                            </Card.Header>
                            <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                <tbody><tr>
                                    <td style={{width: '30%'}}>
                                        Basic modal example 
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default" id="dialog-basic-opener">Launch</button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '30%'}}>
                                        Overlay modal example 
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default" id="dialog-overlay-opener">Launch</button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '30%'}}>
                                        Animated modal example 
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default" id="dialog-animated-opener">Launch</button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '30%'}}>
                                        Buttons modal example 
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default" id="dialog-buttons-opener">Launch</button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '30%'}}>
                                        Disable drag modal example 
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default" id="dialog-drag-disabled-opener">Launch</button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style={{width: '30%'}}>
                                        Form modal example 
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default" id="dialog-form-opener">Launch</button>
                                    </td>
                                    </tr>
                                </tbody></table>
                            </div>
                            <div id="dialog-basic" title="Basic dialog">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                            <div id="dialog-overlay" title="Overlay dialog">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                            <div id="dialog-animated" title="Animated dialog">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                            <div id="dialog-buttons" title="Dialog with buttons">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                            <div id="dialog-drag-disabled" title="Disable drag">
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                            </div>
                            <div id="dialog-form" title="Vertical form">
                                <form action="#">
                                <div className="form-control">
                                    <Row>
                                    <Col sm="6">
                                        <label>First name</label>
                                        <input type="text" placeholder="Eugene" className="form-control" />
                                    </Col>
                                    <Col sm="6">
                                        <label>Last name</label>
                                        <input type="text" placeholder="Kopyov" className="form-control" />
                                    </Col>
                                    </Row>
                                </div>
                                <div className="form-control">
                                    <Row>
                                    <Col sm="6">
                                        <label>Address line 1</label>
                                        <input type="text" placeholder="124, Munna Wali" className="form-control" />
                                    </Col>
                                    <Col sm="6">
                                        <label>Address line 2</label>
                                        <input type="text" placeholder="Niwaru Road, Jhotwara" className="form-control" />
                                    </Col>
                                    </Row>
                                </div>
                                <div className="form-control">
                                    <Row>
                                    <Col sm="4">
                                        <label>City</label>
                                        <input type="text" placeholder="jaipur" className="form-control" />
                                    </Col>
                                    <Col sm="4">
                                        <label>State/Province</label>
                                        <input type="text" placeholder="Rajsthan" className="form-control" />
                                    </Col>
                                    <Col sm="4">
                                        <label>ZIP code</label>
                                        <input type="text" placeholder={302012} className="form-control" />
                                    </Col>
                                    </Row>
                                </div>
                                <div className="form-control">
                                    <Row>
                                    <Col sm="6">
                                        <label>Email</label>
                                        <input type="text" placeholder="support@support.com" className="form-control" />
                                        <span className="help-block">support@support.com</span>
                                    </Col>
                                    <Col sm="6">
                                        <label>Phone #</label>
                                        <input type="text" placeholder="+99-99-9999-9999" data-mask="+99-99-9999-9999" className="form-control" />
                                        <span className="help-block">+91-12-1234-5678</span>
                                    </Col>
                                    </Row>
                                </div>
                                </form>
                            </div>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                    <Card>
                        <Card.Header>
                        Selectable
                        </Card.Header>
                        <Card.Body>
                        <ol id="selectable">
                            <li className="ui-widget-content">Item 1</li>
                            <li className="ui-widget-content">Item 2</li>
                            <li className="ui-widget-content">Item 3</li>
                            <li className="ui-widget-content">Item 4</li>
                            <li className="ui-widget-content">Item 5</li>
                        </ol>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="6">
                    <Card>
                        <Card.Header>
                        Accordions
                        </Card.Header>
                        <Card.Body>
                        <div id="accordion">
                            <h3>Section 1</h3>
                            <div>
                            <p>
                                Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer
                                ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit
                                amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut
                                odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.
                            </p>
                            </div>
                            <h3>Section 2</h3>
                            <div>
                            <p>
                                Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet
                                purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor
                                velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In
                                suscipit faucibus urna.
                            </p>
                            </div>
                            <h3>Section 3</h3>
                            <div>
                            <p>
                                Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
                                Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
                                ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
                                lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
                            </p>
                            <ul>
                                <li>List item one</li>
                                <li>List item two</li>
                                <li>List item three</li>
                            </ul>
                            </div>
                            <h3>Section 4</h3>
                            <div>
                            <p>
                                Cras dictum. Pellentesque habitant morbi tristique senectus et netus
                                et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in
                                faucibus orci luctus et ultrices posuere cubilia Curae; Aenean lacinia
                                mauris vel est.
                            </p>
                            <p>
                                Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus.
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                inceptos himenaeos.
                            </p>
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiJqueryElements;
