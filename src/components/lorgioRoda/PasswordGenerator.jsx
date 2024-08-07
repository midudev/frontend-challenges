import React, { useState } from 'react'
import CopieIcon from './CopieIcon'
import { useCopieText } from './hook/useCopieText'

const passwordGenerator = (props) => {
	const chars = '1234567890asdfghjklqwertyuiop@!$&*.zxcvbnm'
	const newPassword = []
	const [password, setPassword] = useState('')

	const generator = () => {
		for (let i = 0; i < props.value; i++) {
			const number = Math.floor(Math.random() * chars.length)
			newPassword.push(chars[number])
		}
		return setPassword(newPassword.join(''))
	}

	return (
		<>
			<div>
				<label className='block text-gray-700 text-m font-bold mb-2' for='password-generator-lorgio'>
					Password Generator
				</label>
				<input className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' value={password} id='password-generator-lorgio' />
				<button className='m-2' onClick={() => useCopieText(password)}>
					<CopieIcon />
				</button>
			</div>
			<button className='mt-2 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline' onClick={() => generator()}>Generator</button>
		</>
	)
}

export default passwordGenerator
