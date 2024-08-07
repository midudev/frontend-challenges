import { useState, useRef } from 'react'
import Checkbox from '../Checkbox'
import { INITIAL_CHECKBOXES } from '../utils'

import styles from './slider.module.css'

const Settings = ({ setPasswordLength, onCheckbox }) => {
	const [length, setLength] = useState(12)
	const [checkboxes, setCheckboxes] = useState(INITIAL_CHECKBOXES)
	const inputRef = useRef()

	const handleChange = (e) => {
		const { value } = e.target
		e.preventDefault()
		setLength(value)

		const min = inputRef.current.min
		const max = inputRef.current.max
		const val = inputRef.current.value

		inputRef.current.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%'
	}

	const handleCheckbox = (id) => {
		const newCheckboxes = { ...checkboxes }
		newCheckboxes[id] = !checkboxes[id]
		if (
			!newCheckboxes.numbers &&
			!newCheckboxes.letters &&
			!newCheckboxes.specials &&
			!newCheckboxes.uppers
		) { newCheckboxes.letters = true }
		setCheckboxes(newCheckboxes)
		onCheckbox(newCheckboxes)
	}

	return (
		<div>
			<div
				style={{ borderBottom: '1px solid #d9770694' }}
				className='text-amber-600 font-semibold pb-2'
			>
				CONFIGURACION
			</div>
			<div className='flex  mt-3'>
				<div className='text-amber-600 text-sm mr-2'>Longitud:</div>
				<output className='w-10 rounded-md text-sm text-amber-600 font-semibold'>{length}</output>
			</div>
			<div className={`${styles.slider} flex items-center relative`}>
				<input ref={inputRef} onInput={handleChange} type='range' min='8' max='32' value={length} />
				<button
					onClick={() => setPasswordLength(length)}
					className={`${styles.generate} text-sm py-1 px-2 rounded-xl relative`}
				>
					<span className={`${styles.animated} hidden md:inline-block`}>Aplicar</span>
					<span className='inline-block md:hidden'>Go</span>
				</button>
			</div>
			<div className='grid grid-cols-2 mt-3'>
				{['numbers', 'letters', 'uppers', 'specials'].map((setting) => (
					<Checkbox
						checked={checkboxes[setting]}
						onCheck={handleCheckbox}
						key={setting}
						id={setting}
					/>
				))}
			</div>
		</div>
	)
}

export default Settings
