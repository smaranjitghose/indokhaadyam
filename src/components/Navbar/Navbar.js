import React from 'react';
import styled from 'styled-components';

//the variables --navbar-color1 and --navbar-color2 are declared under :root in globalStyles.js
//the variable --navbar-font is declared under root in App.css

const Box = styled.nav`
    background: var(--navbar-color1);
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    font-size: 1.3rem;
    padding: 15px;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`

const ListItem = styled.li`
    margin-left: 25px;
    border-bottom: 2px solid transparent;
    font-family: var(--main-font);

    &:hover{
        border-bottom: 2px solid #22a6b3;
        transition: all 0.2s ease-in-out;
    }
`

const Link = styled.a`
    text-decoration: none;
    color: var(--navbar-color2);
    font-family: var(--main-font);
`
const Navbar = () => {
    return (
        <Box>
                <List>
                    <ListItem><Link href = "/">Home</Link></ListItem>
                    <ListItem><Link href = "#">Categories</Link></ListItem>
                    <ListItem><Link href = "Contact">Contact</Link></ListItem>
                    <ListItem><Link href = "#">Blog</Link></ListItem>
                    <ListItem><Link href = "Team">Team</Link></ListItem>
                </List>
        </Box>
    )
}

export default Navbar;
