import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.div `
    text-align: center;
    padding: 10px 0;
`;

const FooterP = styled.p `
    color: #888
`;

const Footer = () => {
    return (
        <FooterSection class="footer">
            <FooterP> copyright &copy; 2021 by ultra profile </FooterP>
        </FooterSection>
    )
}

export default Footer;