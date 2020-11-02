import React, { Component } from 'react';
import{ withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
    render() {
        const GoogleMapExample = withGoogleMap(props => (
           <GoogleMap
             defaultCenter = { { lat: 39.7365, lng: -104.991531} }
             defaultZoom = { 12 }
           >
           </GoogleMap>
        ));
        return(
           <div>
             <GoogleMapExample
               containerElement={ <div style={{ height: `40rem`, width: '40rem'}} /> }
               mapElement={ <div style={{ height: `100%` }} /> }
             />
           </div>
        );
        }
     };
export default Map;