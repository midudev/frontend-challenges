import React from 'react'
import PasswordGenerator from './PasswordGenerator'
import { GitHub } from '../icons/icons'

const Wrapper = () => {
	return (
		<div className='text-white flex flex-col items-center justify-center h-screen font-sans'>
			<PasswordGenerator />

			<p className='text-white font-mono absolute bottom-5'>
				<a
					href='https://github.com/danizt'
					title='danizt Github profile'
					target='_blank'
					className='flex flex-row gap-2'
				>
					by @danizt <GitHub />
				</a>
			</p>
		</div>
	)
}

export default Wrapper
