import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import './styles/passwordGenerator.css'
import InputRange from './InputRange'
import passwordFunction from './utils/passwordFunction'

const PasswordGenerator = () => {
	const [inputRange, setInputRange] = useState(6)
	const [display, setDisplay] = useState(false)
	const passwordValue = passwordFunction(inputRange)
	const handleCopyPass = () => {
		navigator.clipboard.writeText(passwordValue)
		alert('Copiado al portapapeles')
	}

	return (
		<main id='adamelamrani'>
			<h1>Random password generator</h1>
			<span onClick={handleCopyPass} className='password-length'>
				Password length: {inputRange}
			</span>
			<InputRange setRange={setInputRange} inputRange={inputRange} setDisplay={setDisplay} />
			{display && (
				<>
					<span id='display-password'>
						{passwordValue}{' '}
						<svg
							onClick={() => {
								handleCopyPass()
							}}
							id='svg-icon'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H16C17.1046 21 18 20.1046 18 19V18M8 5C8 6.10457 8.89543 7 10 7H12C13.1046 7 14 6.10457 14 5M8 5C8 3.89543 8.89543 3 10 3H12C13.1046 3 14 3.89543 14 5M14 5H16C17.1046 5 18 5.89543 18 7V10M20 14H10M10 14L13 11M10 14L13 17'
								stroke='#ffffff'
								strokeWidth={2}
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</span>
				</>
			)}
			<ButtonComponent onClick={() => setDisplay(true)}>Generate Password</ButtonComponent>
		</main>
	)
}

export default PasswordGenerator
