import "./App.css";
import ContactForm from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* //* Home routes */}
          <Route exact path="/" element={<HomePage />} />
       
          {/* //* Auth routes - USER*/}

          <Route exact path="/contact" element={<ContactForm />} />
         

        </Routes>
      </Router>
    </>
  );
};

export default App;

