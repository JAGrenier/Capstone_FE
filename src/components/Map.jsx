import React from 'react'
import {
    GoogleMap, 
    useLoadScript, 
    Marker,
    InfoWindow,
} from '@react-google-maps/api'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";


// import "@reach/combobox/styles.css"
 const libraries = ["places"]
 const types = ["establishment"]
    const mapContainerStyle = {
        width: '100%',
        height: '70vh',
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
            lng: event.latLng.lng()
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
            >
                <Search panTo={panTo} />
                <Locate panTo={panTo} />
                {markers.map((marker) =>  
                    <Marker 
                        key={`${marker.lat}-${marker.lng}`}
                        position={{lat: marker.lat, lng: marker.lng}} 
                        onClick ={() => {
                            setSelected(marker);
                        }}
                    /> 
                    )}
                        {selected.lat ? (
                            <InfoWindow
                                position={{lat: selected.lat, lng: selected.lng}} 
                                onCloseClick={() => {
                                    setSelected(null);
                                }}
                            >
                                <div>
                                    <h2>
                                       Location Name
                                    </h2>
                                    <p>review highlights</p>
                                </div>
                            </InfoWindow>
                        ) : null}
            </GoogleMap>
        </div>
    )
}

function Locate({panTo}){
    return (
        <button className="locate" onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) =>{
                    console.log(position)
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    })
                }, 
                () => null,
            );
        }}
        >
            Locations Near Me
        </button>
    )
}

function Search({panTo}) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
        location:  {lat: () => 39.7392, lng:() => -104.9903},
        radius: 100 * 1000,
      },
    });
    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("error", error);
        }
        };

    return (
        <div className="search">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search for a Restaurant Name"
                    />
                <ComboboxPopover>
                    <ComboboxList style={{backgroundColor: "white"}}>
                        {status === "OK" &&
                            data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}