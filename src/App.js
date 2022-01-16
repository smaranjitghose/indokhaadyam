import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import GlobalStyle from './globalStyles';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <GlobalStyle />
    <Home />
  </>
  );
}

export default App;
