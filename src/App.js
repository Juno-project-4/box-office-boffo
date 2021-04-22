import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";
import MovieDetails from "./MovieDetails";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Search} />
                <Route exact path="/movie/:movieId" component={MovieDetails} />
                <Footer />
            </div>
        </Router>
    );
}
export default App;
