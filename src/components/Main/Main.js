import React from 'react';
import styled from 'styled-components/macro';
import Bet from './Bet';

const Main = () => {
    return (
        <>
            <MainStyled>
                <h1>Prono de la semaine</h1>
                <Bet />
            </MainStyled>
        </>
    );
};

const MainStyled = styled.div`
    height : 900px;
    background-color : #D2161E;

    h1 {
        color : #F6CC03;
        text-align : center;
        font-size : 45px;
        padding : 60px 0;
        font-family: 'Poppins', sans-serif;
        text-transform : uppercase;
    }
`

export default Main;