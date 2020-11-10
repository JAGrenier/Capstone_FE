import React, {useState, createContext} from 'react';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [address, setAddress] = useState([])
    const [selectedRestaurant, setSelectedRestaurant] = useState(null)
    const addRestaurants = (restaurant) => {
        setRestaurants([...restaurants, restaurant])
    }

    return (
        <RestaurantsContext.Provider value={{restaurants, setRestaurants, addRestaurants, selectedRestaurant, setSelectedRestaurant, address, setAddress}} >
            {props.children}
        </RestaurantsContext.Provider>
    )
}