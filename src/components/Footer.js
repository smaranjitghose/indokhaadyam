import React from 'react';
import styled from 'styled-components';

const Box = styled.div`

    padding: 80px 60px;
    background: rgb(248, 248, 248);
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;



const Footer = () => {
    return (
        <Box>
            <h1 style={{ textAlign: "center",
                        marginTop: "-50px" }}>
                IndoKhaadyam 
            </h1>
            <Container>
                <p style={{textAlign: 'center', marginTop: "1.5rem", fontSize: "1.2rem"}}>Made with 💖 in India for the world</p>
            </Container>
        </Box>
    )
}

export default Footer;