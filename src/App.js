import "./App.css";
import ContactForm from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Team from "./pages/Team";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* //* Home routes */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/contact" element={<ContactForm />} />
            
         {/* Features Page */}
         {/* <Route exact path="/features" element={<Features/>} />  */}
          <Route exact path="/team" element={<Team />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

