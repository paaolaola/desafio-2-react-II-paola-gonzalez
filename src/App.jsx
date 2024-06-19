import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/MyContext";
import Navbar from "./components/Navbar";
import Router from "./router/Router";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
    return (
        <MyProvider>
            <BrowserRouter>
                <Navbar />
                <Router />
                <ToastContainer />
                <Footer />
            </BrowserRouter>
        </MyProvider>
    );
};

export default App;
