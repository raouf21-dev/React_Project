import styled from 'styled-components';

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});

export const AboutSection = styled.div `
    height: 500px;
    width: 100%;
    background: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    
`;

export const AboutInfo = styled.div `
    padding-top: 20px;
    float: right;
    width: 50%;
    ${customMedia.lessThan('smtablet')`
        padding-top: 10px;
        width: 100%;        
    `};
    ${customMedia.lessThan('tablet')`
        padding-top: 10px;
        width: 100%;        
    `};
`;

export const InfoTitle = styled.h2 `
    font-weight: bold;
    font-size: 50px;
`;

export const Span = styled.span `
    font-weight: normal;
`;

export const InfoDir = styled.h4 `
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 0;
`;

export const InfoDesc = styled.p `
    color: #000;
    margin-bottom: 5px;
    line-height: 1.2;
`;

export const Anchor = styled.a `
    text-decoration: none
`; 
