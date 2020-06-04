import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const StyledNotice = styled.div`
    padding:2rem 3rem;
    background:${props=>props.theme.yellow};
    & .inner {
        max-width:${props=>props.theme.maxWidth};
        display: flex;
        justify-content: space-between;
        & > div {
            align-self: center;
            padding: 0 15px;
            &:last-child {
                margin-left:auto;
            }
        }
        & p {
            margin:0;
        }
    }
`

const Notice = () => {
    return (
        <StyledNotice>
            <div className="inner">
                    <div>
                        <FontAwesomeIcon icon={faExclamationCircle} size="4x" />
                    </div>
                    <div>
                        <h3>Important Update for COVID-19</h3><p>At Velocihuman we are constantly monitoring news about the outbreak and its impact on your porting.</p>
                    </div>
                    <div>
                        <a className="btn btnPrimary">Learn More</a>
                    </div>
            </div>
        </StyledNotice>
    );
};

export default Notice;