import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={Search} />
                <Footer />
            </div>
        </Router>
    );
}
export default App;
