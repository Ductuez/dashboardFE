import React from 'react';
import "./index.scss";
import GmapsSimple from './gmaps-simple';
import MarkerMap from './marker-map';
import PolygonMap from './polygon-map';
import RoutesMap from './routes-map';


class MapGoogle extends React.Component {

    render() {
        return (
            <React.Fragment>
                <GmapsSimple />
                <MarkerMap />
                <PolygonMap />
                <RoutesMap />
            </React.Fragment>
        );
    }
}

export default MapGoogle;
