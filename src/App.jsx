import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/MyContext";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import Footer from "./components/Footer";

const App = () => {
    return (
        <MyProvider>
            <BrowserRouter>
                <Navbar />
                <Router />
                <Footer />
            </BrowserRouter>
        </MyProvider>
    );
};

export default App;
