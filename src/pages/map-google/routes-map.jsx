import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Row, Col, Card } from 'react-bootstrap';

export default class RoutesMap extends React.Component {
    static defaultProps = {
        lat: -12.043333,
        lng: -77.028333,
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 5
      };

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                        <Card>
                            <Card.Header>
                                Routes Map
                            </Card.Header>
                            <Card.Body>
                            <GoogleMapReact id="gmaps-simple" style={{width: '100%', height: 350}} 
                                bootstrapURLKeys={{ key: 'AIzaSyA7nx22ZmINYk9TGiXDEXGVxghC43Ox6qA' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                            </GoogleMapReact>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
