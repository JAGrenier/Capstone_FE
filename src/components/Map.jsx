import React, { useContext} from 'react'
import "@reach/combobox/styles.css"
import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
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
    const {restaurants, setRestaurants } = useContext(RestaurantsContext);

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
                {/* <Marker 
                 position={{
                    lat: 39.685431,
                    lng: -104.980155
                }}
                /> */}
                {restaurants.map((restaurant) => ( 
                    <Marker 
                        
                        position={{
                            lat: parseFloat(restaurant.lat),
                            lng: parseFloat(restaurant.lng)
                        }}
                    />
                ))}
            </GoogleMap>
        </div>
    )
}

