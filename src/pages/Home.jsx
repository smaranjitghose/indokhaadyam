import React from "react";
import Home from "../components/Home";
import GlobalStyle from "../globalStyles";
import Footer from "../components/Footer";
import { useMediaQuery } from "react-responsive";
import Navbar from "../components/Navbar/Navbar";
import MobileNavbar from "../components/Navbar/mobilenavbar";


const HomePage = () => {
  const isMobile = useMediaQuery({maxWidth: "700px"})

  return (
  <>
  <GlobalStyle />
  <Home />
       {!isMobile && <Navbar />}
       {isMobile && <MobileNavbar />}
       <Footer />

  
  </>
  )
};

export default HomePage;
