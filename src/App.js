import "./App.css";
import ContactForm from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Team from "./pages/Team/Team";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="*" element={<PageNotFound />} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/contact" element={<ContactForm />} />
                    <Route exact path="/team" element={<Team />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;