import React, { useEffect, useState ,useCallback} from "react";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import "./Home.css";



const Home = () => {
  const [year, setYear] = useState(0);
  const [civil, setCivil] = useState("0");
  const [dish, setDish] = useState(0);

 


  const counter = useCallback(() => {
    let civilnew = (parseFloat(civil) + parseFloat("0.1")).toFixed(1);
    setCivil(civilnew);
    setDish(dish + 50);
    setYear(year + 1000);
    
  }, [year, dish, civil]);

  useEffect(() => {
    if (year < 10000 && dish < 500 && civil < 1.0) {
      setTimeout(() => {
        counter();
      }, 100);
    }

    if (civil > 0.9) {
      setCivil(1);
    }
  }, [year, dish, civil,counter]);

  return (
    <div className="Container">
      <div className="LogoSection">
        <h1>IndoKhaadyam</h1>
        <br></br>
        <div>
          {year} + years, {civil} Civilization, {dish} + dishes
        </div>
      </div>
      <div className="SearchSection">
        <div className="Form" action="/" method="GET" role="search">
          <input type="search" className="Input-section" placeholder="Find your delicacy..."  />
          <FaSearch className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
