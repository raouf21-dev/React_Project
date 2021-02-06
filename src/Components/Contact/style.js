import styled from 'styled-components';

export const ContactSection = styled.div `
    padding: 50px 0;
    text-align: center
`;

export const ContactTitle = styled.h2 `
    font-size: 60px;
    margin-bottom: 30px
`;

export const Span = styled.span `
    font-weight: normal
`;

export const ContactForm = styled.form `
    width: 70%;
    margin: auto;
`;

export const Input = styled.input `
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    border: 0;
    border: 1px solid #e4e4e4
`;

export const FormInput = styled.div `
    overflow: hidden
`;

export const InputText = styled(Input) `
    float: left;
    width: 49%;
`;

export const InputEmail = styled(Input) `
    float: right;
    width: 49%;
`;

export const InputExp = styled(Input) `
    width: 100%;
`;

export const TextArea = styled.textarea `
    width: 100%;
    outline: 0;
    background: #e4e4e4;
    border: 0;
    border: 1px solid #eee;
`;

export const InputSubmit = styled(Input) `
    width: 60%;
    margin-top: 10px;
    background: #fff;
    border: 1px solid #ccc;
    color: #fff;
    background: #CC2127;
    cursor: pointer;
    &:hover {
        opacity: .8;
    }
    &:active {
        transform: scale(.98);
    }
`;