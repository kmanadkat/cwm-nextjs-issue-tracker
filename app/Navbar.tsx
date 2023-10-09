import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const Navbar = () => {
	const links = [
		{ label: 'Dashboard', href: '/' },
		{ label: 'Issues', href: '/issues' },
	];

	return (
		<nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14'>
			{/* Brand */}
			<Link href='/'>
				<AiFillBug />
			</Link>
			{/* Routes Links */}
			<ul className='flex space-x-6'>
				{links.map((l) => (
					<Link
						key={l.href}
						className='text-zinc-500 hover:text-zinc-800 transition-colors'
						href={l.href}>
						{l.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
