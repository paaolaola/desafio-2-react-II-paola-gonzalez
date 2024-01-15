import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [plants, setPlants] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (plant) => {
        if (!favorites.includes(plant)) {
            const newFavorites = [...favorites, plant];
            setFavorites(newFavorites);
        }
    };

    const removeFavorite = (plant) => {
        const updatedFavorites = favorites.filter((fav) => fav !== plant);
        setFavorites(updatedFavorites);
    };

    const globalState = {
        plants,
        setPlants,
        favorites,
        addFavorite,
        removeFavorite,
    };

    return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
};

export default MyProvider;
