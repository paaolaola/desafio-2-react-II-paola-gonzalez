import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import MyCard from "./MyCard";

const Gallery = () => {
    //Usamos el hook useContext para acceder al contexto y obtener el valor de la propiedad plants
    const { plants } = useContext(MyContext);

    return (
        <section className="gallery">
            <div className="cards-container">
                {plants.map((plant) => (
                    <MyCard key={plant.id} plant={plant} />
                ))}
            </div>
        </section>
    );
};

export default Gallery;
