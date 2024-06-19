import React, { createContext, useState } from "react";
export const MyContext = createContext();

//Se crea el componente MyProvider que recibe una prop children
const MyProvider = ({ children }) => {
    //Se usa el hook useState para crear una variable de estado plants y una función para actualizarla setPlants
    const [plants, setPlants] = useState([]);
    //Se usa el hook useState para crear una variable de estado favorites y una función para actualizarla setFavorites
    const [favorites, setFavorites] = useState([]);

    //Se crea la función addFavorite que recibe una planta y la agrega a la lista de favoritos
    const addFavorite = (plant) => {
        if (!favorites.includes(plant)) {
            const newFavorites = [...favorites, plant];
            //Se actualiza el estado favorites con la nueva lista de favoritos
            setFavorites(newFavorites);
        }
    };
    //Se crea la función removeFavorite que recibe una planta y la elimina de la lista de favoritos
    const removeFavorite = (plant) => {
        const updatedFavorites = favorites.filter((fav) => fav !== plant);
        setFavorites(updatedFavorites);
    };

    //Se crea un objeto globalState con las propiedades plants, setPlants, favorites, addFavorite y removeFavorite
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
