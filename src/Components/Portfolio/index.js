import React , {useState, useEffect} from 'react';
import axios from 'axios';
import {PortfolioSection, PortfolioTitle, Span, PortfolioUl, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan, WrapperBox} from './style.js';

const Portfolio = () => {

    const [images, setImages] = useState([]);

    useEffect (() => {
        axios.get('js/data.json').then(res => { setImages(res.data.portfolio)})
    },[]);

    const portfolioImages = images.map(imageItem => {
        return (
            <ImageWrapper key={imageItem.id}>
                <Image src={imageItem.image} alt=""/>
                <Overlay>
                    <OverlaySpan>
                        Show Image
                    </OverlaySpan>
                </Overlay>
            </ImageWrapper>
        )
    })
    return (
        <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioUl>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioUl>
            
            <WrapperBox class="ox">
                {portfolioImages}
            </WrapperBox>
        
    </PortfolioSection>
    )
}

export default Portfolio;