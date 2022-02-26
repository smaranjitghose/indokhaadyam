import React, { useEffect, useState ,useCallback} from "react";
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import "./Home.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 290px;
  height: calc(100% - 560px);
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SearchSection = styled.div`

border: none;

background-color:transparent ;
padding: 30px;
 
`;

const Form = styled.div`
 width:400px;
 display: flex;
 justify-content: center;
 flex-direction: row;
 align-items: center;
 border: 3px solid #FFCC11;
 padding: 0px 6px;
 background-color: white;
 border-radius:5px;

  
`;

const inputStyle = {
  color: "black",
  border: "none",
  padding: "10px",
  width:"400px",
  height: "36px",
 
  
};

const logoStyle = {
  color: "#FFCC11",
  fontSize:"26px",
  marginRight:"5px"
 
 
  
};





/*const SearchIcon = styled.span`
  color: #9aa0a6;
  height: 30px;
  width: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  & svg {
    fill: #9aa0a6;
  }
`;
*/


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
    <Container>
      <LogoSection>
        <h1>IndoKhaadyam</h1>
        <br></br>
        <div>
          {year} + years, {civil} Civilization, {dish} + dishes
        </div>
      </LogoSection>
      <SearchSection>
        <Form action="/" method="GET" role="search">
          <input type="search" style={inputStyle} placeholder="Find your delicacy..."  />
          <FaSearch style={logoStyle} />
        </Form>
      </SearchSection>
    </Container>
  );
};

export default Home;
