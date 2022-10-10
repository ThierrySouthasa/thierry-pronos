import React from 'react';
import styled from 'styled-components/macro';
import Card from './Card';

const Offer = () => {
    return (
        <OfferStyled>
            <h1>Abonnement</h1>
            <Card />
        </OfferStyled>
    );
};

const OfferStyled = styled.div`
    height : 80vh;
    background-color : #E8E9EB;

    h1 {
        color : #D2161E;
        text-align : center;
        font-size : 45px;
        padding : 100px 0;
        font-family: 'Poppins', sans-serif;
        text-transform : uppercase;
    }
`

export default Offer;