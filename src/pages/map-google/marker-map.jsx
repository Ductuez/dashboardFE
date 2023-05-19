import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Row, Col, Card } from 'react-bootstrap';

export default class MarkerMap extends React.Component {
       
    static defaultProps = {
        lat: 34.043333,
        lng: -78.028333,
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 5
      };

    render() {

        const latitude = this.props.lat;
        const longitude = this.props.lng;
        

        const renderMarkers = (map, maps) => {
            let marker = new maps.Marker({
            position: { lat: latitude, lng: longitude },
            map,
            title: 'Hello World!'
            });
            return marker;
        };

        return (
            <React.Fragment>
                <Row>
                    <Col md="12">
                        <Card>
                            <Card.Header>
                            Basic Map 
                            </Card.Header>
                            <Card.Body>
                            <GoogleMapReact id="gmaps-simple" style={{width: '100%', height: 350}} 
                                bootstrapURLKeys={{ key: 'AIzaSyA7nx22ZmINYk9TGiXDEXGVxghC43Ox6qA' }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                yesIWantToUseGoogleMapApiInternals
                                onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
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
