import React, { Fragment } from 'react'
// eslint-disable-next-line import/no-absolute-path
import Logo from '/logo.svg'

export const Navbar = () => {
	return (
		<Fragment>
			<nav className='p-5'>
				<div className='w-24 h-9'>
					<img src={Logo} alt='Logo' />
				</div>
			</nav>
		</Fragment>
	)
}
