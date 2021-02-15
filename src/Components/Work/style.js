import styled  from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    lgDesktop: "1350px",
    mdDesktop: "1150px",
    tablet: '960px',
    smtablet: "736px"
});

export const WorkWrapper = styled.div `

    ${customMedia.lessThan('smtablet')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-item: center;
    `};
`;


export const WorkSection = styled.div `
    text-align: center;
    height: auto;
    width: 80%;
    padding: 50px 0;
    margin: auto;
    background: #fff;
    display: grid;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;

    ${customMedia.lessThan('smtablet')`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-item: center;
    `};
`;


export const WorkTitle = styled.h2 `
    font-size: 60px; 
`;


export const TitleSpan = styled.span `
    font-weight: normal;
`;

export const WorkPart = styled.div `
    margin-top: 20px;
    width: 100%;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
`;



export const Icon = styled.i `
    color: #888;
    margin-bottom: 20px;
`;


export const PartTitle = styled.h4 `
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px;
`;


export const PartHr = styled.hr `
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
`;


export const PartDesc = styled.p `
    font-size: 14px;
    color: #888;
    padding: 20px
`;
