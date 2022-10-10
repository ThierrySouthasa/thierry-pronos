import React from 'react';
import styled from 'styled-components/macro';

const About = () => {
    return (
        <AboutStyled>
            <h1>Pourquoi me faire confiance ?</h1>
            <p>Grand fan de sport depuis ma tendre enfance, j'exerce ce métier avec la plus grande des passions.<br />
                Chaque pronostic est le fruit de plusieurs minutes, heures et journées d'analyse.<br />
                Rien est laissé au hasard, ma confiance oscille toujours entre 90% et 99%.<br />
                Si toi aussi tu veux suivre le wagon du gain, n'hésites pas à me faire confiance !</p>
        </AboutStyled>
    );
};

const AboutStyled = styled.div`
    height : 60vh;
    text-align : center;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size : 50px;
        padding: 15vh 0 10vh 0;
    }

    p {
        font-size : 31px;
        padding : 0 20px;
        font-family: 'Inter', sans-serif;
    }
`

export default About;