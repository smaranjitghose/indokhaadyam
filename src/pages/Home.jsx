import React from "react";
import Home from "../components/Home";
import GlobalStyle from "../globalStyles";
import Footer from "../components/Footer";
import TopCategory from "../components/TopCategory";


const HomePage = () => {
  return (
  <>
  <GlobalStyle />
  <Home />
  <TopCategory/>
       <Footer />
     
  
  </>
  )
};

export default HomePage;
