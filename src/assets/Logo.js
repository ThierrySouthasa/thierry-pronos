import styled from 'styled-components/macro';

const Logo = () => {
    return (
        <LogoStyled>
            <h1>Thierrypronos.</h1>
        </LogoStyled>
    );
};

const LogoStyled = styled.div`
    text-transform : uppercase;
    color : #FFF;
    font-size : 13px;
    font-family: 'Poppins', sans-serif;
    text-align : center;
`

export default Logo;