import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import MyCard from "./MyCard";

const Gallery = () => {
    const { plants } = useContext(MyContext);

    return (
        <section className="gallery">
            <div className="cards-container">
                {plants && plants.map((plant) => <MyCard key={plant.id} img={plant.src.large} title={plant.alt} url={plant.photographer_url} />)}
            </div>
        </section>
    );
};

export default Gallery;
