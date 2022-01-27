import React from 'react';
import styled from 'styled-components';

<link href="https://fonts.googleapis.com/css2?family=Bitter:wght@600&family=Roboto+Mono:wght@500&family=Varela+Round&display=swap" rel="stylesheet"></link>

const Box = styled.div`
    background: rgb(0,0,0);
    position: absolute;
    bottom: 0;
    width: 100%;
    display: grid;
    height: 20vh;
    grid-template-rows: 50% 10% 40%; 
`;

//I have created the footer using grid which has 3 elements.
const Box1 = styled.div`
    width: 100%;
    text-align: center;
    align-self: center;
    font-size: 0.8rem;
    color: rgb(255,204,17);
`;

const Box2 = styled.div`
    width: 100%;
    text-align: center;
    background: rgb(255,204,17);
    padding-top: 5px;
    color: rgb(0 , 0, 0);
    font-size: 1rem;
`

const Triangle = styled.div`
    width: 30px;
    height: 100%;
    text-align: center;
    margin-left: 50vw;
    transform: translate(-16px);
    border-top: 10px solid rgb(0,0,0);
    border-left: 15px solid rgb(255,204,17);
    border-right: 15px solid rgb(255,204,17);
`;

//The Container variable was present in the previous version. As I wasnt using it I have just commented it.

/*const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;*/

const Footer = () => {
    return (
        <Box>
            <Box1>
                <h1 style = {{fontFamily: "Varela Round"}}>IndoKhaadyam</h1>
            </Box1>
            <div style = {{width: "100%" , backgroundColor: "rgb(255,204,17)" }}>
                <Triangle></Triangle>
            </div>
            <Box2>
                <p style = {{fontFamily: "monospace"}}>Made with 💖 in India for the world</p>
            </Box2>
        </Box>
    )
}

export default Footer;