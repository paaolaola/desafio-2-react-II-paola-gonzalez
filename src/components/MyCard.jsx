import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../context/MyContext";

import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

const MyCard = ({ plant }) => {
    const { favorites, addFavorite, removeFavorite } = useContext(MyContext);
    const [isPlantFavorite, setIsPlantFavorite] = useState(favorites.includes(plant));

    useEffect(() => {
        // Actualizar el estado local cuando cambia el estado global de favorites
        setIsPlantFavorite(favorites.includes(plant));
    }, [favorites, plant]);

    const handleFavoriteClick = () => {
        if (isPlantFavorite) {
            removeFavorite(plant);
        } else {
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
