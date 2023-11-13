import { useContext } from "react";
import { MyContext } from "../context/MyContext";

import MyCard from "./MyCard";

const FavoritesGallery = () => {
    const { favorites } = useContext(MyContext);

    return (
        <section className="gallery">
            <div className="favorites-container">
                {favorites.map((plant) => (
                    <MyCard key={plant.id} plant={plant} />
                ))}
                {favorites.length === 0 && <h3>No favorites yet. Add a pic</h3>}
            </div>
        </section>
    );
};

export default FavoritesGallery;
