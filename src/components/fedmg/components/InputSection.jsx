import React from 'react'

export const InputSection = ({ state: range, handler: getRange }) => {
	return (
		<div className='fedmg-input-section'>
			<div className='fedmg-label-section'>
				<label className='fedmg-label'>Password length:</label>
				<span className='fedmg-range-span'>{range}</span>
			</div>
			<input
				type='range'
				id='fedmg-range'
				value={range}
				min='4'
				max='18'
				step='1'
				onChange={getRange}
			/>
		</div>
	)
}
