import React from 'react';
import styled from 'styled-components/macro';

const About = () => {
    return (
        <AboutStyled>
            <h1>A propos de moi</h1>
        </AboutStyled>
    );
};

const AboutStyled = styled.div`
    height : 400px;
`

export default About;