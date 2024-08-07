import React from 'react'

const SliderRange = (props) => {
	const value = props.value
	return (
		<>
			<div>
				<label className='block mt-2 text-m font-medium text-gray-900 dark:text-gray-300'>Characters for your password </label>
				<input className='w-1/2 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700' type='range' min='6' max='20' value={props.value} onChange={({ target: { value: radius } }) => { props.setValue(radius) }}/>
				<div className='buble'>
					{value}
				</div>
			</div>
		</>
	)
}

export default SliderRange
