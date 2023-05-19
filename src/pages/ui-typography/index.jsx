import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';


class UiTypography extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Heading Styles
                        </Card.Header>
                        <Card.Body>
                        <h1>h1. Heading 1</h1>
                        <h2>h2. Heading 2</h2>
                        <h3>h3. Heading 3</h3>
                        <h4>h4. Heading 4</h4>
                        <h5>h5. Heading 5</h5>
                        <h6 className="margin-b-0">h6. Heading 6</h6>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Styled Headings
                        </Card.Header>
                        <Card.Body>
                        <h1>Heading 1 <small>Secondary Text</small></h1>
                        <h2>Heading 2 <small>Secondary Text</small></h2>
                        <h3>Heading 3 <small>Secondary Text</small></h3>
                        <h4>Heading 4 <small>Secondary Text</small></h4>
                        <h5>Heading 5 <small>Secondary Text</small></h5>
                        <h6>Heading 6 <small>Secondary Text</small></h6>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Inline text elements
                        </Card.Header>
                        <Card.Body>
                        <p className="lead">
                            Lead text example
                        </p>
                        <p> Hello, i am <mark>highlight</mark> text, write me into <code>&lt;mark&gt;</code> tag</p>
                        <p><del>Lorem ipsum dolor sit amet</del></p>
                        <p>
                            lorem ipsum <strong>dolor</strong> sit amter
                        </p>
                        <p>
                            <em>lorem ipsum dolor sit amter</em>
                        </p>
                        <p className="dropcap">
                            Lorem ipsum dolor sit amet
                        </p>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        text colors
                        </Card.Header>
                        <Card.Body>
                        <p className="text-muted">
                            Nullam id dolor id nibh ultricies vehicula ut id elit. 
                        </p>
                        <p className="text-primary">
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
                        </p>
                        <p className="text-warning">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. 
                        </p>
                        <p className="text-info">
                            Maecenas sed diam eget risus varius blandit sit amet non magna.
                        </p>
                        <p className="text-warning">
                            Etiam porta sem malesuada magna mollis euismod.
                        </p>
                        <p className="text-danger">
                            Etiam porta sem malesuada magna mollis euismod.
                        </p>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Ordered list
                        </Card.Header>
                        <Card.Body>
                        <ol>
                            <li>
                            Nullam id dolor id nibh ultricies vehicula ut id elit. 
                            </li>
                            <li>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. 
                            </li>
                            <li>
                            Etiam porta sem malesuada magna mollis euismod. 
                            </li>
                            <li>
                            Nullam id dolor id nibh ultricies vehicula ut id elit. 
                            </li>
                        </ol>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Unordered list
                        </Card.Header>
                        <Card.Body>
                        <ul>
                            <li>
                            Nullam id dolor id nibh ultricies vehicula ut id elit. 
                            </li>
                            <li>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula. 
                            </li>
                            <li>
                            Etiam porta sem malesuada magna mollis euismod. 
                            </li>
                            <li>
                            Nullam id dolor id nibh ultricies vehicula ut id elit. 
                            </li>
                        </ul>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiTypography;
