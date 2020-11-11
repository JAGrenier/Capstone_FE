import React, { useContext } from 'react'
import "@reach/combobox/styles.css"
import { GoogleMap, useLoadScript, Marker, InfoWindow} from '@react-google-maps/api';
import { RestaurantsContext } from '../Context/RestaurantsContext'
import Locate from "../components/MapComponents/Locate"
import Search from "../components/MapComponents/Search"
import RestaurantCard from './RestaurantCard';
import AddRestaurant from './AddRestaurant';
import { Button } from '@material-ui/core';

    const libraries = ["places"]
    const type = ['restaurant']
    const mapContainerStyle = {
        width: '100%',
        height: '70vh',
    };
    const options = {
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
    const {restaurants} = useContext(RestaurantsContext);
    
    const checkLocation = (selected) => {
        if(restaurants.find(restaurant => restaurant.id === selected.id)){ 
            return <RestaurantCard className="map-card" style={{width: '250px'}} restaurant={selected}/>
        }else{
            return <AddRestaurant  position={{lat: selected.lat, lng: selected.lng}}  />
        }
    }

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

    const handleScroll = () =>{
        window.scrollTo({
            top: 750, 
            left: 0,
            behavior: 'auto'
        })
    }

    const panTo = React.useCallback(({lat, lng}) => {
            mapRef.current.panTo({ lat, lng });
            mapRef.current.setZoom(18);
        }, []);
    
    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";
        
    return (
        <div >
            <Button 
                className="scroll-button"
                variant="contained"
                color="primary"
                onClick={handleScroll}
                >
                Scroll To Reviews
            </Button>
            <br></br>
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
                        {checkLocation(selected)}
                    </InfoWindow>
                )}
                {markers.map((marker) =>  
                    <Marker 
                        key={`${marker.lat}-${marker.lng}`}
                        position={{lat: marker.lat, lng: marker.lng}} 
                        onClick ={() => { setSelected(marker);
                        }}
                    /> 
                )}
            </GoogleMap>
        </div>
    )
}