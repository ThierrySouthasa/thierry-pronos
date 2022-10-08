import React from 'react';
import styled from 'styled-components/macro';

const Footer = () => {
    return (
        <FooterStyled>
            <h1>Footer</h1>
        </FooterStyled>
    );
};

const FooterStyled = styled.div`
    height : 300px;
    color : #FFF;
    background-color : lightpink;
`

export default Footer;