import React from 'react';
import "./index.scss";
import { Row, Col, Card } from 'react-bootstrap';
import { VectorMap } from 'react-jvectormap';


class MapVector extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">

                    <Card>
                        <Card.Header>
                        World Map 
                        </Card.Header>
                        <Card.Body>

                        <div style={{height: 500}}>
                            <VectorMap map={'world_mill'}
                                backgroundColor="#3b96ce"
                                ref="map"
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                containerClassName="map"
                            />
                        </div>

                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        USA Map
                        </Card.Header>
                        <Card.Body>
                        <div style={{height: 400}}>
                            <VectorMap map={'us_aea'}
                                backgroundColor="#transparent"
                                ref="map"
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                regionStyle= {{
                                    initial : {
                                        fill : '#f42048'
                                    }
                                }}
                                containerClassName="map"
                            />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Australia Map
                        </Card.Header>
                        <Card.Body>
                        <div style={{height: 400}}>
                            <VectorMap map={'au_mill'}
                                backgroundColor="#transparent"
                                ref="map"
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                regionStyle= {{
                                    initial : {
                                        fill : '#FF7043'
                                    }
                                }}
                                containerClassName="map"
                            />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <Card>
                        <Card.Header>
                        Russia Map
                        </Card.Header>
                        <Card.Body>
                        <div style={{height: 400}}>
                            <VectorMap map={'ru_mill'}
                                backgroundColor="#transparent"
                                ref="map"
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                regionStyle= {{
                                    initial : {
                                        fill : '#7986CB'
                                    }
                                }}
                                containerClassName="map"
                            />
                        </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md="6">
                    <div className="card ">
                        <Card.Header>
                        India Map
                        </Card.Header>
                        <Card.Body>
                        <div style={{height: 400}}>
                            <VectorMap map={'in_mill'}
                                backgroundColor="#transparent"
                                ref="map"
                                containerStyle={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                regionStyle= {{
                                    initial : {
                                        fill : '#03A9F4'
                                    }
                                }}
                                containerClassName="map"
                            />
                        </div>
                        </Card.Body>
                    </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default MapVector;
