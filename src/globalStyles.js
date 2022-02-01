import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --footer-color1: rgb(255,204,17);
    --footer-color2: rgb(0,0,0);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html, body {
    overflow-x: hidden;
  }
`;

export default GlobalStyle;