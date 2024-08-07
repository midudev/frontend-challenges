import React, { useState } from 'react'
import CopyIcon from './CopyIcon'

const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(14)
	const [password, setPassword] = useState('')

	const handleButton = () => {
		const characters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()-+'
		let randomPassword = ''
		for (let i = 0; i < passwordLength; i++) {
			randomPassword = randomPassword.concat(
				characters.charAt(Math.floor(Math.random() * characters.length))
			)
			setPassword(randomPassword)
		}
	}

	return (
		<div className='h-screen flex flex-col items-center p-10 space-y-4'>
			<div className='block p-6 rounded-lg shadow-lg bg-[#3C3242] bg-opacity-60 max-w-sm text-center flex flex-col justify-center items-center w-2/4'>
				<h5 className='text-gray-900 text-xl leading-tight text-[#A974A8]  font-medium mb-2'>
					Password Generator
				</h5>
				<p className='text-gray-400'>Password length {passwordLength}</p>
				<input
					type='range'
					className='form-range
					appearance-none
					w-full
					h-6
					p-0
					bg-[#3C3242]
					focus:outline-none focus:ring-0 focus:shadow-none
					rounded-full
					my-5
					'
					id='customRange1'
					onChange={(event) => setPasswordLength(event.target.value)}
					max={24}
					min={4}
				/>
				<button
					type='button'
					className='rounded-md inline-block px-6 py-2.5 bg-[#1A1320] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#190F1F] hover:shadow-lg focus:bg-[#190F1F] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
					onClick={handleButton}
				>
					{password ? 'Regenerate Password' : 'Generate Password'}
				</button>
				{password
					? (
						<div className='flex flex-row w-4/5 bg-[#A974A8] rounded-lg bg-opacity-60 justify-center items-center mt-5 mx-10'>
							<p className='text-gray-200 rounded-lg mr-2'>{password}</p>
							<div onClick={() => navigator.clipboard.writeText(password)}>
								<div className='w-5 hover:cursor-pointer flex flex-column justify-center'>
									<CopyIcon />
								</div>
							</div>
						</div>
					)
					: (
						''
					)}
			</div>
		</div>
	)
}

export default PasswordGenerator
