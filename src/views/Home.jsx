import { useEffect, useState, useContext } from "react";
import { MyContext } from "../context/MyContext";

import Gallery from "../components/Gallery";

const Home = () => {
    const [error, setError] = useState(false);

    const { setPlants } = useContext(MyContext);

    const getPhotos = async () => {
        const apiKey = "Y3TD07sKj2Xxs3XZrWNex5V1TJE6PoLwQzk6R5yxmlwmtyzDL5rF9BAp";
        const searchQuery = "plants";
        const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=20`;

        try {
            const res = await fetch(apiUrl, {
                headers: {
                    Authorization: apiKey,
                },
            });
            const json = await res.json();
            setError(false);
            setPlants(json.photos);
        } catch (error) {
            setError(true);
        }
    };

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
