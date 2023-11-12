import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Card from "react-bootstrap/Card";
import IconHeart from "./IconHeart";

const MyCard = ({ img, title, url }) => {
    const { favorites, addFavorite } = useContext(MyContext);

    const isFavorite = () => {
        return favorites.some((favorite) => favorite.img === img && favorite.title === title && favorite.url === url);
    };

    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Body className="card-body">
                    <Card.Img className="card-image" variant="top" src={img} />
                    <Card.Title className="text-card">
                        <h4>{title}</h4>
                        <div className="url-btn">
                            <a className="visit-btn" href={url} target="_blank">
                                Go
                            </a>
                        </div>
                        <div>
                            <button className="btn-heart" onClick={() => addFavorite({ img, title, url })}>
                                <IconHeart filled={isFavorite()}></IconHeart>
                            </button>
                        </div>
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    );
};

export default MyCard;
