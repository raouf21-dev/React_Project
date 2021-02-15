import styled from "styled-components";
import { Link } from "react-router-dom";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1200px",
    tablet: '960px',
    smtablet: "736px"
});



export const NavBarSection = styled.div `
    padding:  5px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;

    ${customMedia.lessThan('smtablet')`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    `};
    ${customMedia.lessThan('mdDesktop')`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    `};

`;

export const Logo = styled.div `
    width: 50%;
    float: left;
`;

export const LogoText = styled.h2 `
text-align: center;
    font-size: 30px;
    font-weight: bold;
`;

export const UlList = styled.ul `
    ${customMedia.lessThan('smtablet')`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       `};
`;

export const ListItem = styled.li `
    display: inline-block;
`;

export const Anchor = styled.a `
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 5px;
    font-weight: bold;

    &:hover{
        color: #eb5424
    }
`;

export const StyledLink = styled(Link)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
        color: #eb5424
    }
`;

export default StyledLink;