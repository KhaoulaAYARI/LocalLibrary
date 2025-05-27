import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Books from "./pages/Books";
import BookInstances from "./pages/BookInstances";
import Authors from "./pages/Authors";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/books" element={<Books />} />
                <Route path="/catalog/bookinstances" element={<BookInstances />} />
                <Route path="/catalog/authors" element={<Authors />} />
            </Routes>
        </Router>
    );
}

export default App;

