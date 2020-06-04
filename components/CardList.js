import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const StyledCardList = styled.div`
    display:grid;
    padding:3rem 2rem;
    grid-gap: 20px;
    max-width:${props=>props.theme.maxWidth};
    margin:0 auto;
    @media (min-width:768px) {
        grid-template-columns: repeat(${props=>props.cols},1fr);
    }
`

const CardList = () => {
    const cardData = [
        {url:'https://picsum.photos/id/1042/600/400.jpg',text:'Distance Erased', longText: `Velocihuman's patented HyperSpace technology nullifies distance. Bringing us closer than ever.`, id:1},
        {url:'https://picsum.photos/id/1079/600/400.jpg', text: 'Limitless Energy', longText: `Harnessing the power of the earth's core, globoports reduces dependence on solar and its human footprint.`, id:2},
        {url:'https://i.picsum.photos/id/137/600/400.jpg', text: 'Boundless Trails', longText: `With a Globoport X9, the only limit on where you'll go next is your imagination.`, id:3}
    ]

    return (
        <StyledCardList cols={3} cardData={cardData}>
            {cardData.map(item=><Card cardData={item} key={item.id} />)}
        </StyledCardList>
    );
};

export default CardList;