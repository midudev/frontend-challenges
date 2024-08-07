import { useState } from 'react'
import { CopyIcon } from './icons/copy'

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
const MIN_LENGTH = 8
const MAX_LENGTH = 16

export default function GeneratePassword() {
	const [pass, setPass] = useState('BADPASSWORD')
	const [length, setLength] = useState(MIN_LENGTH)
	const [showAlert, setShowAlert] = useState(false)

	const generatePassword = () => {
		let password = ''
		for (let i = 0; i < length; i++) {
			password += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
		}
		setPass(password)
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(pass)
		setShowAlert(true)
		setTimeout(() => {
			setShowAlert(false)
		}, 1000)
	}

	return (
		<>
			<div className='flex justify-center bg-slate-100 rounded-lg'>
				<p className='text-center p-5 text-3xl text-[#f4a261]'>{pass}</p>
				<button onClick={handleCopy}>
					<CopyIcon />
					{showAlert && (
						<div className='bg-[#e9c46a] text-[#264653] rounded-lg p-2 absolute'>
							<p className='text-center'>Password Copied!</p>
						</div>
					)}
				</button>
			</div>
			<input
				className='w-full rounded-lg bg-[#e9c46a] text-red-700 appearance-none cursor-pointer'
				type='range'
				min={MIN_LENGTH}
				max={MAX_LENGTH}
				value={length}
				onChange={(e) => setLength(e.target.value)}
				step={1}
			/>
			<button
				className='bg-[#e76f51] text-[#264653] w-full rounded-lg py-2 text-xl font-medium'
				onClick={generatePassword}
			>
				GENERATE
			</button>
			<p className='text-center text-[#f4a261] text-xl font-medium'>Password Length: {length}</p>
		</>
	)
}
