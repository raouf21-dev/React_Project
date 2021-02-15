import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});

export const PortfolioSection = styled.div `
    
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
    ${customMedia.lessThan('smtablet')`
        text-align: center;
    `};
    `;

export const PortfolioTitle = styled.h2 `
    text-align: center;
    font-size: 35px;
    `;

export const Span = styled.span `
    font-weight: normal;
    `;

export const PortfolioUl = styled.ul `
    list-style: none;
    text-align: center;
    margin: 20px 0;

    ${customMedia.lessThan('smtablet')`
        display: grid;
        flex-direction: column;
        justify-content: center;
        align-item: center;
    `};
`;

export const PortfolioItem = styled.li `
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${props => props.active ? '#eb5424' : ''};
    color: ${props => props.active ? '#fff' : ''};
`;

export const WrapperBox = styled.div ` 

    ${customMedia.lessThan('smtablet')`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    `};
`;

export const ImageWrapper = styled.div `
    width: 25%;
    float: right;
    font-size: 0;
    position: relative;
    
    ${customMedia.lessThan('smtablet')`
        width: 100%;
    `};
    &:hover > div {
        opacity: 1;
    }
`;

export const Image = styled.img `
    width: 100%;
`;

export const Overlay = styled.div `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
`;

export const OverlaySpan = styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid #eb5424;
`;