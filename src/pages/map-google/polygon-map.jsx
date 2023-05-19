import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Row, Col, Card } from 'react-bootstrap';

export default class PolygonMap extends React.Component {

    static defaultProps = {
        lat: -12.040397656836609,
        lng: -77.03373871559225,
        click: function(e){
          console.log(e);
        },
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
                            Polygon Map
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
