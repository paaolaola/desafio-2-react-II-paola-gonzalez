import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import MyCard from "./MyCard";

const FavoritesGallery = () => {
    //Se usa el hook useContext para acceder al contexto y obtener el valor de la propiedad favorites
    const { favorites } = useContext(MyContext);

    return (
        <section className="gallery">
            <div className="favorites-container">
                {favorites.map((plant) => (
                    <MyCard key={plant.id} plant={plant} />
                ))}
                {favorites.length === 0 && <h3 className="message-favorite">No favorites yet. Add a pic</h3>}
            </div>
        </section>
    );
};

export default FavoritesGallery;
