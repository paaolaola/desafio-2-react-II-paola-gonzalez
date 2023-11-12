import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import MyCard from "./MyCard";

const FavoritesGallery = () => {
    const { favorites } = useContext(MyContext);

    return (
        <section className="gallery">
            <div className="favorites-container">
                {favorites.map((plant) => {
                    return <MyCard key={plant.id} img={plant.src} title={plant.alt} url={plant.photographer_url} />;
                })}
                {favorites.length === 0 && <h3>No favorites yet. Add a pic</h3>}
            </div>
        </section>
    );
};

export default FavoritesGallery;
