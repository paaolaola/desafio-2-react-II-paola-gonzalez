import { Container } from "react-bootstrap";

function NotFound() {
    return (
        <Container className="container-message">
            <h3 className="text-error">Error 404: Page not found ⚠️</h3>
        </Container>
    );
}

export default NotFound;
