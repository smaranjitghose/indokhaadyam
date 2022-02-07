import './App.css';
import Home from './components/Home';
import GlobalStyle from './globalStyles';
import Footer from './components/Footer';
import Categories from './components/Categories'
function App() {
  return (
    <>
    <GlobalStyle />
    <Home />
    <Categories />
    <Footer />
  </>
  );
}

export default App;
