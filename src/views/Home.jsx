import { useEffect, useState, useContext } from "react";
import { MyContext } from "../context/MyContext";
import Gallery from "../components/Gallery";

//
const Home = () => {
    //Se usa el hook useState para crear una variable de estado error y una función para actualizarla setError
    const [error, setError] = useState(false);
    //Se usa el hook useContext para acceder al contexto y obtener la propiedad setPlants
    const { setPlants } = useContext(MyContext);

    //Se crea la función getPhotos que hace una petición a la API de Pexels para obtener fotos de plantas
    const getPhotos = async () => {
        const apiKey = "Y3TD07sKj2Xxs3XZrWNex5V1TJE6PoLwQzk6R5yxmlwmtyzDL5rF9BAp";
        const searchQuery = "plants";
        const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=100`;

        //Se usa el método fetch para hacer una petición a la API de Pexels y obtener fotos de plantas
        try {
            const res = await fetch(apiUrl, {
                headers: {
                    Authorization: apiKey,
                },
            });
            const json = await res.json();
            //Se actualiza el estado plants con las fotos obtenidas
            setError(false);
            setPlants(json.photos);
        } catch (error) {
            setError(true);
        }
    };
    //Se usa el hook useEffect para ejecutar la función getPhotos cuando el componente se monta
    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <h1 className="App">ALL PICS</h1>
            <div className="text-titles">
                <p className="text-title1">
                    Check out this awesome plant pic collection! Dive in and explore heaps of photos, plus you can check out each creator's profile. It's a
                    visual treat!
                </p>
                <p className="text-title2">
                    There are so many captivating photos to enjoy, and guess what? You can easily make any photo your favorite by simply clicking the heart
                    icon. Build your personalized collection with a single click!
                </p>
            </div>

            <Gallery />
        </div>
    );
};
export default Home;
