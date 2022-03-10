import "./App.css";
import ContactForm from "./pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Team from "./pages/Team/Team";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import RecipeForm from "./pages/RecipeForm/RecipeForm";
const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="*" element={<PageNotFound />} />
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/contact" element={<ContactForm />} />
                    <Route exact path="/team" element={<Team />} />
                    <Route exact path='/recipeform' element={<RecipeForm />}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;