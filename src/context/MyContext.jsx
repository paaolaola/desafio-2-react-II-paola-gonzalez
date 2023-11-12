import { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [plants, setPlants] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (plantFavorites) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(plantFavorites)) {
                return prevFavorites.filter((id) => id !== plantFavorites);
            }
            return [...prevFavorites, plantFavorites];
        });
    };

    const globalState = { plants, setPlants, favorites, addFavorite };

    return <MyContext.Provider value={globalState}>{children}</MyContext.Provider>;
};

export default MyProvider;
