import React from 'react'
import { PasswordGenerator } from '@components/MaximilianoCabreraP/PasswordGenerator'

export const Card = () => {
	return (
		<div className='w-4/5 mx-auto text-center py-12'>
			<h1 className='font-bold text-2xl mb-3'>PasswordGenerator</h1>
			<PasswordGenerator />
		</div>
	)
}
