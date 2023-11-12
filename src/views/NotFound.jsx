import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NotFound() {
    return (
        <Container className="container-message">
            <h3 className="text-error">Error 404: Page not found ⚠️</h3>
            <div>
                <Link to="/" className="button-home">
                    Back to Home
                </Link>
            </div>
        </Container>
    );
}

export default NotFound;
