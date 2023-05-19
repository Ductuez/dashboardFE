import React from 'react';
import "./index.scss";
import { Row, Col, Card, Tooltip, Button, OverlayTrigger, Popover } from 'react-bootstrap';


class UiTipPop extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Tooltips
                        </Card.Header>
                        <Card.Body>
                        <div className="buttons">

                        {['top', 'right', 'bottom', 'left'].map((placement) => (
                            <OverlayTrigger
                            key={placement}
                            placement={placement}
                            overlay={
                                <Tooltip id={`tooltip-${placement}`}>
                                Tooltip on <strong>{placement}</strong>.
                                </Tooltip>
                            }
                            >
                            <Button variant="secondary" className="mr-1">Tooltip on {placement}</Button>
                            </OverlayTrigger>
                        ))}

                         </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="12">
                    <Card>
                        <Card.Header>
                        Popovers
                        </Card.Header>
                        <Card.Body>
                        <div className="buttons">

                        {['top', 'right', 'bottom', 'left'].map((placement) => (
                            <OverlayTrigger
                            trigger="click"
                            key={placement}
                            placement={placement}
                            overlay={
                                <Popover id={`popover-positioned-${placement}`}>
                                <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                                <Popover.Content>
                                    <strong>Holy guacamole!</strong> Check this info.
                                </Popover.Content>
                                </Popover>
                            }
                            >
                            <Button variant="secondary"  className="mr-1">Popover on {placement}</Button>
                            </OverlayTrigger>
                        ))}

                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default UiTipPop;
