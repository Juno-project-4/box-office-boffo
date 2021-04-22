import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>
                <Link
                    to="/"
                    aria-label="Go to home page"
                    className="homepage-link"
                >
                    Summer Movies
                </Link>
            </h1>
        </header>
    );
};

export default Header;
