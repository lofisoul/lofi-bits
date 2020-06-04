import React from 'react';
import styled from 'styled-components'

const StyledHero = styled.div`
    position:relative;
    & .hero-img {
        background-image:url(https://i.picsum.photos/id/1018/1600/650.jpg);
        background-repeat:no-repeat;
        background-position:center;
        background-size:cover;
        padding:12rem 1rem 3rem;
        @media (min-width:768px) {
            padding:15rem 6rem 6rem;
        }
    }
    & .hero-text {
        color:#fff;
        max-width:600px;
        position:relative;
        & h1 {
            font-size: 4rem;
            letter-spacing: -.07rem;
            @media (min-width:768px) {
                font-size:6rem;
            }
        }
        & h2 {
            font-weight:500;
            line-height: 1.4;
            margin: 0 0 3rem;
        }
    }
    &.hero-corners .hero-text {
        padding:3rem 2rem;
        &:before {
            content:'';
            position:absolute;
            width:2rem;
            height:2rem;
        }
        &:before {
            right:100%;
            top:100%;
            border-top:5px solid white;
            border-right:5px solid white;
        }
    }
    &.hero-darken {
        &:after {
            content:'';
            background:rgba(0,0,0,.5);
            position:absolute;
            left:0;
            top:0;
            bottom:0;
            right:0;
            z-index:1;
        }
        & .hero-text {
            z-index:3;
        }
    }
`

const Hero = () => {
    return (
        <StyledHero className="hero-corners hero-darken">
            <div className="hero-img">
                <div className="hero-text">
                    <h1>Going Places</h1>
                    <h2>Discover a whole world of possibilities</h2>
                    <p>Move around the globe in an instant with the latest globoportals</p>
                    <a className="btn btnPrimary">Get a Quote</a>
                </div>
            </div>
        </StyledHero>
    );
};

export default Hero;