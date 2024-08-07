import React from 'react'
import Generator from './Generator'
import Settings from './Settings'
import Icons from '../icons'

const Card = ({ height, type, first, ...others }) => {
	const wrapperClass = `${height} my-3 w-full roudend-md border border-amber-700 relative flex flex-col justify-center p-6 bg-transparent rounded shadow-xl hover:shadow-lg transition max-w-md md:max-w-xl md:h-full md:max-h-lg md:p-8`
	const Component = type === 'password' ? Generator : Settings

	return (
		<div className={wrapperClass}>
			{first
				? (
					<ul style={{ bottom: '100%' }} className='w-full mb-4 absolute left-0'>
						<li className='inline-flex items-center'>
							<Icons type='chevronLeft' margin='m-0' />
							<a className='text-amber-600 text-center flex flex-col gap-y-2' href='/'>
								<span className='block text-sm'>Volver</span>
							</a>
						</li>
					</ul>
				)
				: null}
			<Component {...others} />
		</div>
	)
}

Card.defaultProps = {
	height: 'h-full',
	type: 'default'
}

export default Card
