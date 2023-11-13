import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [plants, setPlants] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (plant) => {
        const newFavorites = [...favorites, plant];
        setFavorites(newFavorites);
        console.log(favorites);
    };

    const globalState = { plants, setPlants, favorites, addFavorite };

    return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
};

export default MyProvider;
