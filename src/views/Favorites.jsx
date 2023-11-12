import { Link } from "react-router-dom";
import FavoritesGallery from "../components/FavoritesGallery";

const Favorites = () => {
    return (
        <main>
            <h1 className="favorites-title"> YOUR FAVORITES PICS</h1>

            <div className="text-title-favorites">
                <p>
                    Feel free to pick your favorite plant pics and save them here or let them go, entirely up to you! It's your visual playground – choose,
                    keep, or clear with just a click.{" "}
                </p>
            </div>

            <div>
                <Link to="/" className="button-home">
                    Back to Home
                </Link>
            </div>

            <div>
                <FavoritesGallery />
            </div>
        </main>
    );
};
export default Favorites;
