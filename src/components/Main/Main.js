import React from 'react';
import styled from 'styled-components/macro';

const Main = () => {
    return (
        <>
            <MainStyled>
                <h1>Pari de la semaine</h1>
            </MainStyled>
        </>
    );
};

const MainStyled = styled.div`
    height : 500px;
    background-color : red;
`

export default Main;