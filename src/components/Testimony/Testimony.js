import React from 'react';
import styled from 'styled-components/macro';

const Testimony = () => {
    return (
        <TestimonyStyled>
            <h1>Témoignages</h1>
        </TestimonyStyled>
    );
};

const TestimonyStyled = styled.div`
    height : 500px;
    text-align : center;
`

export default Testimony;