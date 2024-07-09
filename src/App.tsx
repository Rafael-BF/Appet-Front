import Menu from "./components/Menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Presentation from "./pages/Presentation/Presentation";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apresentacao" element={<Presentation />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
