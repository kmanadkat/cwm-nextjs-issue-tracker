'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';

const Navbar = () => {
	const currentPath = usePathname();
	console.log(currentPath);
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
						className={classNames({
							'text-zinc-900': l.href === currentPath,
							'text-zinc-500': l.href !== currentPath,
							'hover:text-zinc-800 transition-colors': true,
						})}
						href={l.href}>
						{l.label}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
