import styled from 'styled-components';

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});

export const SocialMSection = styled.div `
    height: auto;
    overflow: hidden;
    ${customMedia.lessThan('smtablet')`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    `};

`;

export const Social = styled.div `
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => props.item === 1 ? '#3b5998' : ''};
    background: ${props => props.item === 2 ? '#498cbf' : ''};
    background: ${props => props.item === 3 ? '#cc2127' : ''};

    ${customMedia.lessThan('smtablet')`
       text-align: center;
       width: 50%;
       margin: 20px auto;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
    `};

`;

export const Icon = styled.i `
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    ${customMedia.lessThan('smtablet')`
        margin-left: -40px; 
    `};
`;

export const SocialDesc = styled.p `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    ${customMedia.lessThan('smtablet')`
        margin-left: -40px; 
    `};
`;

export const Span = styled.span `
    display: block;
    margin-bottom: 8px;
`;

export const SpanInfo = styled.span `
    font-weight: normal ;
`;
