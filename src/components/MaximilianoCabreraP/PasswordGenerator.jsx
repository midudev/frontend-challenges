import React, { useEffect, useState } from 'react'
import Toast from './Toast/Toast'

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS = '0123456789'
const SYMBOLS = '!@#$%^&*_-+='

export const PasswordGenerator = () => {
	const [passwordLength, setPasswordLength] = useState(8)
	const [filters, setFilters] = useState({
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: true
	})
	const [password, setPassword] = useState('')

	function handleChangeLength({ target }) {
		setPasswordLength(target.value)
	}
	const [showToast, setShowToast] = useState(2)

	function handleCopy() {
		navigator.clipboard.writeText(password).then(() => {
			setShowToast(1)
			setTimeout(() => {
				setShowToast(2)
			}, 6000)
		})
	}

	useEffect(() => {
		if (Object.values(filters).includes(true)) {
			generatePassword()
		} else {
			setPassword('por favor seleccioná al menos un filtro')
		}
	}, [passwordLength, filters])

	function generatePassword() {
		let chars = ''
		chars += filters.uppercase ? UPPERCASE : ''
		chars += filters.lowercase ? LOWERCASE : ''
		chars += filters.numbers ? NUMBERS : ''
		chars += filters.symbols ? SYMBOLS : ''

		let randomstring = ''
		for (let i = 0; i < passwordLength; i++) {
			const randomNumber = Math.floor(Math.random() * chars.length)
			randomstring += chars.substring(randomNumber, randomNumber + 1)
		}
		setPassword(randomstring)
	}

	return (
		<div className='grid justify-items-center'>
			<span>Opciones para dar complejidad:</span>
			<ul className='flex gap-3'>
				<li>
					Mayusculas:{' '}
					<input
						type='checkbox'
						defaultChecked={filters.uppercase}
						name='uppercase'
						onClick={() => setFilters({ ...filters, uppercase: !filters.uppercase })}
					/>
				</li>
				<li>
					Minúsculas:{' '}
					<input
						type='checkbox'
						defaultChecked={filters.lowercase}
						name='lowercase'
						onClick={() => setFilters({ ...filters, lowercase: !filters.lowercase })}
					/>
				</li>
				<li>
					Números:{' '}
					<input
						type='checkbox'
						defaultChecked={filters.numbers}
						name='numbers'
						onClick={() => setFilters({ ...filters, numbers: !filters.numbers })}
					/>
				</li>
				<li>
					Símbolos:{' '}
					<input
						type='checkbox'
						defaultChecked={filters.symbols}
						name='symbols'
						onClick={() => setFilters({ ...filters, symbols: !filters.symbols })}
					/>
				</li>
			</ul>
			<span>
				8{' '}
				<input max='64' min='8' onChange={handleChangeLength} type='range' value={passwordLength} />{' '}
				64
			</span>
			Selected {passwordLength}
			<div className='flex justify-center items-center gap-2'>
				Password:
				<span className='text-slate-300 font-bold bg-transparent ml-1 p-1 '>{password}</span>
				<button onClick={handleCopy}>
					<img
						id='image'
						className='w-5'
						src='https://cdn.icon-icons.com/icons2/412/PNG/128/Copy_40923.png'
						alt='copy to clipboard'
					/>
				</button>
				<Toast showToast={showToast} />
			</div>
			<button className='bg-sky-700 rounded py-1 px-2 hover:bg-sky-500' onClick={generatePassword}>
				Generate
			</button>
		</div>
	)
}
