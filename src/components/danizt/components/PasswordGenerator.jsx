import React, { useState, useEffect } from 'react'
import Toast from './Toast'
import { getRandomPassword, copyPassword, getPasswordStrength } from '../utils/passwordManager'
import { Copy } from '../icons/icons'
import { hover1Style, hover2Style } from '../styles/hover'
import { NUMBERS, LOWER_CASE, UPPER_CASE, SPECIAL } from '../constants/characters'

const PasswordGenerator = () => {
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState(14)
	const [passwordStrength, setPasswordStrength] = useState(0)
	const [passwordCopied, setPasswordCopied] = useState(false)
	const [chkNumbers, setChkNumbers] = useState(true)
	const [chkLowercase, setChkLowercase] = useState(true)
	const [chkUppercase, setChkUppercase] = useState(true)
	const [chkSpecial, setChkSpecial] = useState(true)

	useEffect(() => {
		handleGeneratePassword()
	}, [])
	useEffect(() => {
		handleGeneratePassword()
	}, [chkNumbers, chkLowercase, chkUppercase, chkSpecial])

	useEffect(() => {
		if (passwordCopied) setTimeout(() => setPasswordCopied(false), 3000)
	}, [passwordCopied])

	function handleCopy() {
		setPasswordCopied(copyPassword(password))
	}

	function handleChangeChkNumbers() {
		setChkNumbers(!chkNumbers)
	}

	function handleChangeChkLowercase() {
		setChkLowercase(!chkLowercase)
	}

	function handleChangeChkUppercase() {
		setChkUppercase(!chkUppercase)
	}

	function handleChangeChkSpecial() {
		setChkSpecial(!chkSpecial)
	}

	function handleGeneratePassword() {
		let charactersAvaliable = ''
		if (chkNumbers) charactersAvaliable += NUMBERS
		if (chkLowercase) charactersAvaliable += LOWER_CASE
		if (chkUppercase) charactersAvaliable += UPPER_CASE
		if (chkSpecial) charactersAvaliable += SPECIAL

		const newPassword = getRandomPassword(charactersAvaliable, passwordLength)
		setPassword(newPassword)
		setPasswordStrength(getPasswordStrength(newPassword))
	}

	return (
		<>
			<h2 className='flex justify-center my-4 mt-0 font-medium leading-tight text-4xl text-cyan-500'>
				Password Generator
			</h2>
			<div className='border border-white rounded-lg p-8 flex flex-col gap-y-4'>
				<div className='flex justify-around'>
					<label
						type='text'
						className='rounded-lg outline-0 py-2 px-2 text-gray-800 bg-white text-center w-96'
					>
						{password}
					</label>
					<button onClick={handleCopy} className={hover1Style}>
						<span className={`${hover2Style} py-2 px-2`}>
							<Copy />
						</span>
					</button>
				</div>
				<div className='flex flex-row justify-evenly mb-4'>
					{[...Array(5)].map((_, i) => {
						return (
							<div
								key={i}
								className={`h-2 w-1/6 rounded-xl transition-colors ${
									passwordStrength === 3
										? 'bg-green-500'
										: passwordStrength === 2
											? 'bg-yellow-400'
											: 'bg-red-400'
								}`}
							></div>
						)
					})}
				</div>

				<label className='flex justify-center gap-2'>
					<span>Password length:</span>
					<span className='text-cyan-500 font-bold'>{passwordLength}</span>
				</label>
				<input
					className='mb-1 accent-cyan-500 cursor-ew-resize'
					type='range'
					min='1'
					max='30'
					value={passwordLength}
					onChange={({ target: { value } }) => {
						setPasswordLength(value)
						handleGeneratePassword()
					}}
				/>

				<div className='flex flex-wrap px-6 mb-2'>
					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkNumbers}
							onChange={handleChangeChkNumbers}
						/>
						Numbers
					</label>

					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkLowercase}
							onChange={handleChangeChkLowercase}
						/>
						Lowercase
					</label>

					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkUppercase}
							onChange={handleChangeChkUppercase}
						/>
						Uppercase
					</label>

					<label className='pl-2 w-1/2'>
						<input
							type='checkbox'
							className='mr-2 accent-cyan-500'
							defaultChecked={chkSpecial}
							onChange={handleChangeChkSpecial}
						/>
						Special
					</label>
				</div>

				<button onClick={handleGeneratePassword} className={hover1Style}>
					<span className={`${hover2Style} py-2 px-2`}>Generate password</span>
				</button>
			</div>

			<Toast text='Password copied successfully.' showToast={passwordCopied} />
		</>
	)
}

export default PasswordGenerator
