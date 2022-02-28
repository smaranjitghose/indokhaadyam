import React from "react";
import Home from "./Home";
import GlobalStyle from "../../globalStyles";
import Footer from "../../components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/Navbar/mobilenavbar";
import TopCategory from "../../components/TopCategory/TopCategory";


const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: "700px" })

  return (
    <>
      <GlobalStyle />
      <Home />
      {!isMobile && <Navbar />}
      {isMobile && <MobileNavbar />}
      <TopCategory />
      <Footer />
    </>
  )
};

export default HomePage;
