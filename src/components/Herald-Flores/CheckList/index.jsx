import React from 'react'
import Check from '../Check/index'

const List = () => {
	const checks = [
		{
			id: 'checkLowercase',
			text: 'Lowercase',
			checked: false
		},
		{
			id: 'checkUppercase',
			text: 'UpperCase',
			checked: false
		},
		{
			id: 'checkNumber',
			text: 'Numbers',
			checked: false
		},
		{
			id: 'checkSymbols',
			text: 'Special characters',
			checked: true
		}
	]

	return (
		<div className='grid gap-3 md:grid-cols-2 py-4'>
			{checks.map((check) => (
				<Check {...check} key={`check-item-${check.id}`} />
			))}
		</div>
	)
}

export default List
