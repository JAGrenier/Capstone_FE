import React, {useEffect, useContext} from 'react'
import "@reach/combobox/styles.css"
import Button from '@material-ui/core/Button';
import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import RestaurantList from './RestaurantList';
import AddReview from './AddReview';
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Locate from "../components/MapComponents/Locate"
import Search from "../components/MapComponents/Search"
import MyMarkers from "./MapComponents/MyMarkers"

    const libraries = ["places"]
    const types = ["establishment"]
    const mapContainerStyle = {
        width: '100%',
        height: '70vh',
    };
    const options = {
        disableDefaultUI: true,
        zoomControl: true,
    };
    const center ={
        lat: 39.7392, 
        lng: -104.9903,
    }
export default function Map() {    
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
        types, 
    }); 
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState([]);

    const onMapClick = React.useCallback((event) => {
        
        setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            },
        ]);
        },[]);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
            mapRef.current.panTo({ lat, lng });
            mapRef.current.setZoom(16);
        }, []);

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";
        
    return (
        <div >
            
            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={10} 
            center={center}
            onClick={onMapClick}
            onLoad={onMapLoad}
            options={options}
            >
                <Search panTo={panTo} />
                <Locate panTo={panTo} />
                <MyMarkers />
            </GoogleMap>
        </div>
    )
}