import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
	border: 0;
	display: block;
	background: none;
	margin-left: auto;
	margin-right: 15px;
	outline: none;
	cursor: pointer;
	@media (min-width: ${props => props.theme.bp}) {
		display: none;
	}

	.hamburger-box {
		width: 40px;
		height: 40px;
		display: inline-block;
		position: relative;
	}
	.hamburger-inner {
		display: block;
		top: 50%;
		margin-top: -2px;
		transition-duration: 0.075s;
		transform: ${props =>
			props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
		transition-delay: 0.12s;
		transition-timing-function: ${props =>
			props.isOpen
				? 'cubic-bezier(0.215, 0.61, 0.355, 1)'
				: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
	}
	.hamburger-inner,
	.hamburger-inner::before,
	.hamburger-inner::after {
		width: 16px;
		height: 1px;
		background-color: ${props => props.theme.lightGray};
		border-radius: 4px;
		position: absolute;
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
	}
	.hamburger-inner::before,
	.hamburger-inner::after {
		content: '';
		display: block;
	}
	.hamburger-inner::before {
		top: ${props => (props.isOpen ? '0' : '-4px')};
		opacity: ${props => (props.isOpen ? '0' : '1')};
		transition: ${props =>
			props.isOpen
				? 'top 0.075s ease, opacity 0.075s 0.12s ease'
				: 'top 0.075s 0.12s ease, opacity 0.075s ease;'};
	}
	.hamburger-inner::after {
		bottom: ${props => (props.isOpen ? '0' : '-4px')};
		transform: ${props =>
			props.isOpen ? 'rotate(-90deg)' : 'rotate(0deg)'};
		transition: ${props =>
			props.isOpen
				? 'bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)'
				: 'bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)'};
	}
`;

const Burger = ({isOpen, toggleNav}) => {
	return (
		<StyledBurger onClick={toggleNav} isOpen={isOpen}>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
				<span className="sr-only">Menu</span>
			</span>
		</StyledBurger>
	);
};

export default Burger;
