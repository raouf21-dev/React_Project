import styled from "styled-components";

export const HomeSection = styled.div `
    height: 500px;
    background: url('images/home-bg.jpg'); 
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
`;
// .home {
    
// }

export const HomeInformation = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

// .home .home-information {
// }

export const HomeTitle = styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
`;

// .home .home-information .home-title {
// }

export const HomeInfo = styled.h4 `
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`;
// .home .home-information .home-info {
// }

export const HomeDesc = styled.p `
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px
`;
// .home .home-information .home-desc {
// }

export const HomeDescSpan = styled.span `
    color: #000
`;
// .home .home-information .home-desc span {
// }

export const HomeBtn = styled.button `
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold

    &:hover {
        background: #fff;
        color: #eb5424
    }
`;

// .home .home-information .home-btn {
// }

// .home .home-information .home-btn:hover {
// }
