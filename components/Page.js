import React, { Component } from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';

const theme = {
    greenDark: '#004445',
    greenMed: '#2c7873',
    greenLight: '#6fb98f',
    yellow: '#ffd800',
    sky: '#82B8D6',
    red: '#ED1C24',
    black: '#222',
    gray: '#555',
    lightGray: '#e7e7e7',
    offWhite: '#f1f1f1',
    maxWidth: '1200px',
    bs: '0 12px 24px 0 rgba(0,0,0,.09)',
    bp: '1300px',
    serif: 'Playfair Display, serif',
    sansSerif: 'Jost, sans-serif'
}

const StyledPage = styled.div`
`


const GlobalStyle = createGlobalStyle`
    html,body {
        height:100%;
    }
    html{
        box-sizing:border-box;
        font-size:10px;
    }

    *,*:before, *:after {
        box-sizing: inherit;
    }

    h1,h2,h3,h4,h5,h6,p {margin:0;}
    p {margin-bottom:2.5rem};

    body {
        padding:0;
        margin:0;
        font-size:1.6rem;
        line-height:1.7;
        background-color:white;
        color:${props=>props.theme.black};
        font-family:${props=>props.theme.sansSerif};
        font-weight:300;
    }

    h1 {
        font-family:${props=>props.theme.serif};
        font-weight:600;
    }

    a {
        text-decoration:none;
        cursor:pointer;
        color: ${props=>props.theme.black}
    }

    .btn {
        padding:1.2rem 3rem;
        display:inline-block;
        font-weight:600;
        text-align:center;
        border-radius:80px;
        transition: background-color 0.2s ease-out;
        font-size: 1.8rem;
        &.btnPrimary {
            color:#fff;
            background-color:${props=>props.theme.greenMed};
            &:hover, &:focus {
                background-color:${props=>props.theme.greenLight}
            }
        }
    }
`


class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <GlobalStyle />
                    <Header />
                    <div className="content">                    
                        {this.props.children}
                    </div>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;