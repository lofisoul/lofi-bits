import styled from 'styled-components';
import Nav from './Nav';
import Burger from './Burger';

const StyledHeader = styled.header`
	padding: 1rem 3rem;
	background-color: #fff;
	box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.07);
`;

const StyledLogo = styled.h1`
	margin: 0;
	font-family: ${props => props.theme.serif};
`;

const Header = () => (
	<StyledHeader>
		<StyledLogo>Lofi Bits</StyledLogo>
		<Nav />
	</StyledHeader>
);

export default Header;
