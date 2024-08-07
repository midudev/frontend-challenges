import { useState } from 'react'
import Card from './Card'
import { INITIAL_CHECKBOXES } from '../utils'

const Password = () => {
	const [length, setPasswordLength] = useState(12)
	const [shouldGenerate, setShouldGenerate] = useState(false)
	const [chars, setChars] = useState(INITIAL_CHECKBOXES)

	const forceGenerate = () => {
		setShouldGenerate(true)
		setTimeout(() => {
			setShouldGenerate(false)
		}, 75)
	}

	const handlePasswordLength = (value) => {
		setPasswordLength(value)
		forceGenerate()
	}

	const handleChars = (values) => {
		setChars(values)
		forceGenerate()
	}

	return (
		<section className='relative p-8 flex flex-col items-center mt-12'>
			<Card
				first
				generate={shouldGenerate}
				height='h-20'
				type='password'
				chars={chars}
				length={length}
			/>
			<Card onCheckbox={handleChars} setPasswordLength={handlePasswordLength} />
		</section>
	)
}

export default Password
