import React from 'react';
import styled from 'styled-components/macro';

const Navbar = () => {
    return (
        <>
            <NavbarStyled>
                <h3>S'inscrire</h3>
                <h3>Se connecter</h3>
            </NavbarStyled>
        </>
    );
};

const NavbarStyled = styled.div`
        height: 75px;
        background-color : #28282A;
        display : flex;
        justify-content : flex-end;
        align-items : center;

    h3 {
        color: #FFF;
        padding : 0 6px;
        margin : 10px;
        text-transform : uppercase;
    }
`

export default Navbar;