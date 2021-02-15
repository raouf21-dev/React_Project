import React from 'react';
import { Link } from "react-router-dom";
import  {NavBarSection, Logo, LogoText, UlList, ListItem, Anchor, StyledLink} from "./style.js";



const Navbar = () => {
    return (
        
        <div className="container">
                <NavBarSection>
                
                    <Logo>
                        <LogoText>Ultra Profile</LogoText>
                    </Logo>

                    <UlList>
                        <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
                        <ListItem><StyledLink to="/work">Work</StyledLink></ListItem>
                        <ListItem><StyledLink to="/portfolio">Portofio</StyledLink></ListItem>
                        <ListItem><StyledLink to="/socialmedia">Resume</StyledLink></ListItem>
                        <ListItem><StyledLink to="about">About</StyledLink></ListItem>
                        <ListItem><StyledLink to="/contact">Contact</StyledLink></ListItem>
                    </UlList>
                
                </NavBarSection>
            </div>
            
    )
}

export default Navbar;