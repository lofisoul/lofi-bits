import React from 'react';
import styled from 'styled-components';

const SkypeCard = styled.div`
    border:1px solid ${props=>props.theme.offWhite};
    border-radius:0 20px 20px 20px;
    & .card-img {
        height:150px;
        min-height:150px;
        border-radius: 0 20px 0 0;
        background-size:cover;
        background-position:center;
        background-repeat: no-repeat;
    }
    & .card-text {
        padding:1rem 2rem;
        & h3 {
            font-weight:600;
            color:${props=>props.theme.greenDark}
        }
        @media (min-width:768px) {
            padding:3rem 4rem;
        }
    }
`

const Card = (props) => {
    const {cardData} = props;
    return (
        <SkypeCard cardData={cardData}>
            <div className="card-img" style={{backgroundImage:`url(${cardData.url})`}}></div>
            <div className="card-text">
                <h3>{cardData.text}</h3>
                <p>{cardData.longText}</p>
            </div>
        </SkypeCard>
    );
};

export default Card;