import React, {useState} from 'react';
import Burger from './Burger';
import Link from 'next/link';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleNav = e => {
		document.body.style.overflow = isOpen ? 'visible' : 'hidden';
		setIsOpen(!isOpen);
	};
	return (
		<nav>
			<Burger toggleNav={toggleNav} isOpen={isOpen} />
			<ul>
				<li>
					<Link href="/">
						<a>Your First Jump</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Benefits</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a>Find Your Plan</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
