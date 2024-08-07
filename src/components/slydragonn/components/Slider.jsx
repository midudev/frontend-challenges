import { useState } from 'react'
import '../styles/Slider.css'

const Slider = ({ handleChange }) => {
	const [value, setValue] = useState(6) // default password length

	const sliderHandleChange = (number) => {
		// Set password length
		handleChange(number)
		setValue(() => number)
	}

	return (
		<section className='flex items-center justify-center'>
			<div className='flex flex-col mr-4'>
				<label htmlFor='range-password-slydragonn' className='text-white italic'>
					Select password length:
				</label>
				<input
					className='my-5'
					id='range-password-slydragonn'
					type='range'
					defaultValue='6'
					min='6'
					max='25'
					onChange={(evt) => sliderHandleChange(evt.target.value)}
				/>
			</div>
			<span className='w-7 bg-black text-white border border-white rounded text-center'>
				{value}
			</span>
		</section>
	)
}

export default Slider
