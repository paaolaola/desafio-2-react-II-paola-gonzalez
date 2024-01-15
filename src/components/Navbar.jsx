import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="text-logo">
                    <Link to="/">
                        {" "}
                        <img className="plant-logo" src="./icons/plant-garden-svgrepo-com.svg" alt="plant" />
                        PLANTS GALLERY{" "}
                    </Link>{" "}
                </div>

                <div className="text-favorite">
                    <Link to="/favorites">
                        Favorites <img className="heart-logo" src="./icons/heart.svg" alt="heart" />
                    </Link>
                </div>
            </nav>
        </header>
    );
};
export default Navbar;
