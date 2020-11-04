import React, {Component} from 'react'
import { Marker, InfoWindow} from '@react-google-maps/api';

export default class MyMarkers extends Component {

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// {markers.map((marker) =>  
//     <Marker 
//         key={`${marker.lat}-${marker.lng}`}
//         position={{lat: marker.lat, lng: marker.lng}} 
//         onClick ={() => {
//             setSelected(marker);
//         }}
//     /> 
//     )}
//         {selected.lat ? (
//             <InfoWindow
//                 position={{lat: 39.6810120, lng: -104.9878250}} 
//                 onCloseClick={() => {
//                     setSelected(null);
//                 }}
//             >
//                 <div>
//                     <h2>
//                     </h2>
//                     <AddReview />
//                     <Button to="/restaurants/:id"> Add a Review </Button>
//                 </div>
//             </InfoWindow>
//         ) : null}