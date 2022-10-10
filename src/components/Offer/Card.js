import React from 'react';
import styled from 'styled-components/macro';

const Card = () => {

    const price = ['1', '5']
    const pack = ['Ligue Europa', 'Champions League']

    return (
        <CardStyle>
            <div className='card'>
                <h3>Pack {pack[0]}</h3>
                <h2>{price[0]} €/mois</h2>
                <ul>
                    <li>1 prono/jour côte sup. à 1,50</li>
                    <li>+ Analyse du pari</li>
                    <li>1 combi/semaine côte sup. à 2,50</li>
                </ul>
            </div>
            <div className='card'>
                <h3>Pack {pack[1]}</h3>
                <h2>{price[1]} €/mois</h2>
                <ul>
                    <li>2 prono/jour côte sup. à 1,50</li>
                    <li>+ Analyse du pari</li>
                    <li>3 combi/semaine côte sup. à 2,50</li>
                    <li>Mon avis sur 5 paris/jour au choix</li>
                </ul>
            </div>
        </CardStyle>

    );
};

const CardStyle = styled.div`
    display: flex;
    justify-content : space-around;

    .card {
    display : flex;
    flex-direction : column;
    align-items : center;
    height : 37em;
    width : 600px;
    margin : 0 30px;
    background-color : #FFF;
    border-radius : 10px;
    border : 1px solid #D2161E;

        h3 {
            font-size : 30px;
            padding : 100px 0;
        }

        h2 {
            font-size : 50px;
            color : #F6CC03;
        }

        ul {
            padding : 80px 0;
        }

        li {
            font-size : 23px;
            list-style-type : none;
            padding: 6px 0;
        }
    }
`

export default Card;