import { useState } from 'react'

import './wayaba.css'
import Slider from './Slider'
import Info from './svg/Info'
import KeyInput from './KeyInput'

const KeyGenerator = ({ min = 6, max = 18 }) => {
	const currentValue = (min + max) / 2
	const [rangeValue, setRangeValue] = useState(currentValue)
	const [password, setPassword] = useState('')
	const handlerClick = (e) => {
		e.preventDefault()
		const characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?'
		let generatePassword = ''
		for (let i = 0; i < rangeValue; i++) {
			generatePassword += characters.charAt(Math.floor(Math.random() * characters.length))
		}
		setPassword(generatePassword)
	}

	const handleSlider = (event) => {
		setRangeValue(event.target.value)
	}

	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center sm:w-1/2 lg:w-1/3 bg-[#edf2f4] shadow-md rounded p-6'>
			<div className='w-full h-12'>
				<p className='text-sm text-gray-600 flex items-center'>
					<Info fill='none' />
					&nbsp;Seleccione el tanaño de la clave que desea generar
				</p>
			</div>

			<div className='w-full h-12'>
				<Slider min={min} max={max} value={rangeValue} onChange={handleSlider} />
			</div>

			<div className='w-full h-12'>
				<button
					type='submit'
					onClick={handlerClick}
					className='bg-[#ef233c] hover:bg-[#d90429] active:bg-[#8d99ae] focus:outline-none text-white font-bold py-2 px-4 rounded-full'
				>
					Generar Clave
				</button>
			</div>

			<div className='w-full h-12'>
				<KeyInput value={password} />
			</div>
		</div>
	)
}

export default KeyGenerator
