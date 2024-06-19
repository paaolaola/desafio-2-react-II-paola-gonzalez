import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/MyContext";
import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";
import { Zoom, toast } from "react-toastify";

const MyCard = ({ plant }) => {
    //Se usa el hook useContext para acceder al contexto y obtener los valores de las propiedades favorites, addFavorite y removeFavorite
    const { favorites, addFavorite, removeFavorite } = useContext(MyContext);
    //Se usa el hook useState para crear el estado isPlantFavorite y se inicializa con el valor de si la planta está en favoritos o no
    const [isPlantFavorite, setIsPlantFavorite] = useState(favorites.some((fav) => fav.id === plant.id));
    //Se usa el hook useEffect para actualizar el estado de isPlantFavorite cada vez que cambie el valor de favorites o plant

    useEffect(() => {
        //Se actualiza el estado de isPlantFavorite si la planta está en favoritos o no
        setIsPlantFavorite(favorites.some((fav) => fav.id === plant.id));
    }, [favorites, plant]);

    //Función que se ejecuta al hacer clic en el botón de favoritos
    const handleFavoriteClick = () => {
        const toastStyle = {
            background: "linear-gradient(to top, #dd8a8a, #ffffff)",
            color: "#1e2d1e",
        };
        if (isPlantFavorite) {
            toast.info("Se ha eliminado de favoritos", {
                transition: Zoom,
                position: "bottom-center",
                style: toastStyle,
                autoClose: 5000,
            });
            removeFavorite(plant);
        } else {
            toast.success("Agregado a favoritos!", {
                transition: Zoom,
                position: "bottom-center",
                style: toastStyle,
                autoClose: 7000,
            });
            addFavorite(plant);
        }
    };

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body className="card-body">
                <Card.Img className="card-image" variant="top" src={plant.src.large} />
                <Card.Title className="text-card">
                    <h4>{plant.alt}</h4>
                    <div className="url-btn">
                        <a className="visit-btn" href={plant.url} target="_blank">
                            Go
                        </a>
                    </div>
                    <div>
                        <button className="btn-heart" onClick={handleFavoriteClick}>
                            <IconHeart filled={isPlantFavorite} />
                        </button>
                    </div>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default MyCard;
