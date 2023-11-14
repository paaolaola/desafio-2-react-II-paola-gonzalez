import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

const MyCard = ({ plant }) => {
    const { favorites, addFavorite } = useContext(MyContext);

    const isFavorite = () => {
        return favorites.includes(plant);
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
                        <button className="btn-heart" onClick={() => addFavorite(plant)}>
                            <IconHeart filled={isFavorite()} />
                        </button>
                    </div>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default MyCard;
