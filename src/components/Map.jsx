import React, { useState, useContext, useHistory} from 'react'
import "@reach/combobox/styles.css"
import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Locate from "../components/MapComponents/Locate"
import Search from "../components/MapComponents/Search"
import { Restaurant } from '@material-ui/icons';
import RestaurantList from './RestaurantList';
import RestaurantDetailsPage from '../routes/RestaurantDetailsPage'
import { Button, Link } from '@material-ui/core';
import StarRating from './StarRating';


    const libraries = ["places"]
    const type = ['restaurant']
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
        type, 
    }); 
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    const {restaurants, setRestaurants } = useContext(RestaurantsContext);
    
    const onMapClick = React.useCallback((event) => {
        console.log("clicked")
        setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            },
        ]);
        },[]);

    // const handleRestaurantSelect = (id) => {
    //     history.push(`/restaurants/${id}`)
    // }

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
                {restaurants.map((restaurant) => ( 
                    <Marker 
                        key={restaurant.id}
                        position={{
                            lat: parseFloat(restaurant.lat),
                            lng: parseFloat(restaurant.lng)
                        }}
                        onClick={() => {
                            setSelected(restaurant);
                        }}
                    />
                ))}
                {selected && (
                    <InfoWindow
                        position={{
                            lat: parseFloat(selected.lat),
                            lng: parseFloat(selected.lng)
                        }}
                        onCloseClick={() => {
                            setSelected(null); 
                        }}
                        >
                            <h2>{selected.name}</h2>
                            {/* <RestaurantList /> */}
                            {/* <Link to="/restaurants/4">
                            <Button
                                className="card-button"
                                variant="contained"
                                color="primary"  
                                // onClick={console.log(selected)}
                                // onClick={() => handleRestaurantSelect(selected.id)} 
                                // // key={restaurant.id}
                                >
                                    View/Add Review 
                            </Button>
                            </Link> */}
                    </InfoWindow>
                )}
                {/* {markers.map((marker) =>  
                    <Marker 
                        key={`${marker.lat}-${marker.lng}`}
                        position={{lat: marker.lat, lng: marker.lng}} 
                        onClick ={() => {
                            setSelected(marker);
                        }}
                    /> 
                )} */}
            </GoogleMap>
        </div>
    )
}

