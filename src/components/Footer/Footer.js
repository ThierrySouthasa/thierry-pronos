import React from 'react';
import styled from 'styled-components/macro';

const Footer = () => {
    return (
        <FooterStyled>
            <h1>Thierry pronos.</h1>
        </FooterStyled>
    );
};

const FooterStyled = styled.div`
    height : 300px;
    color : #FFF;
    background-color : #D2161E;
    text-align : center;
`

export default Footer;