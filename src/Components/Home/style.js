import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});
export const HomeSection = styled.div `
    height: 500px;
    background: url('images/home-bg.jpg'); 
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    width: 100%;
`;

export const HomeInformation = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    ${customMedia.lessThan('smtablet')`
        width: 350px
    `};
    
`;


export const HomeTitle = styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;

    ${customMedia.lessThan('tablet')`
        font-size: 35px;
        margin-bottom: -30px
    `};
    ${customMedia.lessThan('smtablet')`
        font-size: 35px;
        margin-bottom: -30px
    `};
`;



export const HomeInfo = styled.h4 `
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`;


export const HomeDesc = styled.p `
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 10px;

    ${customMedia.lessThan('smtablet')`
        line-height: 1.5;
        font-size: 15px;
    `};

`;

export const HomeDescSpan = styled.span `
    color: #000
`;

export const HomeBtn = styled.button `
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background: #fff;
        color: #eb5424;
    }
`;

