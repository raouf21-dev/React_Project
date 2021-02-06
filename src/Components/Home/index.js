import React from 'react';
import {HomeSection, HomeInformation, HomeTitle, HomeInfo, HomeDesc, HomeDescSpan, HomeBtn} from "./style.js";
const Home = () => {
    return (
        <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Abderraouf Aissaoui</HomeTitle>
                    <HomeInfo>Web Developer</HomeInfo>
                    <HomeDesc>
                        Iam a  <HomeDescSpan>Front-End Developer</HomeDescSpan> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas. 
                    </HomeDesc>
                    <HomeBtn >Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
        </HomeSection>
    )
}

export default Home;