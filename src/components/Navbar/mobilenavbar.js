import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuToggle } from './menuToggle';

//the variables --navbar-color1 and --navbar-color2 are declared under :root in globalStyles.js
//the variable --navbar-font is declared under root in App.css

const Box = styled.nav`
    background: var(--navbar-color1);
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 10px;
    font-size: 1.3rem;
`;

const List = styled.ul`
    list-style: none;
    width: 100%;
    background: var(--navbar-color1);
    display: flex;
    flex-direction: column;
`

const ListItem = styled.li`
    border-bottom: 2px solid transparent;
    font-family: var(--navbar-font);
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
`

const Link = styled.a`
    text-decoration: none;
    color: var(--navbar-color2);
    font-family: var(--navbar-font);
    &:hover{
        border-bottom: 2px solid #22a6b3;
        transition: all 0.2s ease-in-out;
    }
`
const MobileNavbar = () => {

    const[isOpen, setOpen] = useState(false);

    return (
        <Box>
                {isOpen && <List>
                    <ListItem><Link href = "/">Home</Link></ListItem>
                    <ListItem><Link href = "#">Categories</Link></ListItem>
                    <ListItem><Link href = "Contact">Contact</Link></ListItem>
                    <ListItem><Link href = "#">Blog</Link></ListItem>
                    <ListItem><Link href = "Team">Team</Link></ListItem>
                </List>}
                
                <MenuToggle isOpen = {isOpen} toggle = {() => setOpen(!isOpen)}/>
        </Box>
    )
}

export default MobileNavbar;
