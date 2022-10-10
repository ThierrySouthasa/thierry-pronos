import React from 'react';
import styled from 'styled-components/macro';

const Bet = () => {

    const nameFirstTeam = 'Paris Saint Germain'
    const nameSecondTeam = 'Benfica'

    const imgFirstTeam = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flogos-marques.com%2Fpsg-logo%2F&psig=AOvVaw0prnXNciPWBhzIwpSowvTh&ust=1665523268535000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjZ0OfL1voCFQAAAAAdAAAAABAI'
    const imgSecondTeam = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FSport_Lisboa_e_Benfica&psig=AOvVaw0jbWItDK7bMe-7Y5_pAzXx&ust=1665523344657000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPimwIzM1voCFQAAAAAdAAAAABAJ'

    const result = 'Victoire Paris Saint Germain'

    return (
        <BetStyled>
            <div className='team'>
                <h2>{nameFirstTeam} - {nameSecondTeam}</h2>
            </div>

            <div className='flag'>
                <img src={imgFirstTeam} alt='psg' />
                <img src={imgSecondTeam} alt='benfica' />
            </div>

            <div className='prognosis'>
                <h2>Résultat :</h2>
                <h3>{result}</h3>
            </div>
        </BetStyled>
    );
};

const BetStyled = styled.div`
                display : flex;
                flex-direction : column;
                align-items : center;
                height : 600px;
                width : 80vw;
                max-width : 1200px;
                background-color : #FFF;
                border-radius : 10px;
                margin : auto;

                h2 {
                    color : #292929;
                    text-align : center;
                    padding: 50px 0 20px 0;
                }

                .flag {
                    display : flex;
                    justify-content : space-around;

                    img {
                        height : 200px;
                    }
                }

                .prognosis {
                    background-color : #F6CC03;
                    height : 15vh;
                    width : 80%;
                    margin : auto;
                    border-radius : 10px;

                    h2 {
                        font-size : 37px;
                    }
                    
                    h3 {
                        text-align : center;
                        font-size : 27px;
                        font-style: italic;
                        background: -webkit-linear-gradient(red, black);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
                `
export default Bet;