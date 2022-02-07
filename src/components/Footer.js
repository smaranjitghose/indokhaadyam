import React from 'react';
import styled from 'styled-components';

//the variables --footer-color1 and --footer-color2 are declared under :root in globalStyles.js
//the variable --footer-font is declared under root in App.css

const Box = styled.div`
    background: var(--footer-color2);
    width: 100%;
    display: grid;
    height: 18vh;
    margin-top: 25px;
    grid-template-rows: 50% 10% 40%; 
`;

//I have created the footer using grid which has 3 elements.
const Box1 = styled.div`
    width: 100%;
    text-align: center;
    align-self: center;
    font-size: 1.5rem;
    color: var(--footer-color1);
    font-family: var(--footer-font);
`;

const Box2 = styled.div`
    width: 100%;
    text-align: center;
    background: var(--footer-color1);
    padding-top: 5px;
    color: var(--footer-color2);
    font-size: 1rem;
    font-family: var(--footer-font);
`

const Triangle = styled.div`
    width: 30px;
    height: 100%;
    text-align: center;
    margin-left: 50vw;
    transform: translate(-16px);
    border-top: 10px solid var(--footer-color2);
    border-left: 15px solid var(--footer-color1);
    border-right: 15px solid var(--footer-color1);
`;

const Footer = () => {
    return (
        <Box>
            <Box1>
                IndoKhaadyam
            </Box1>
            <div style = {{width: "100%" , backgroundColor: "var(--footer-color1)" }}>
                <Triangle></Triangle>
            </div>
            <Box2>
                Made with 💖 in India for the world
            </Box2>
        </Box>
    )
}

export default Footer;