import React from 'react'

const SliderPass = ({ MIN, MAX, range, setRange }) => {
	return (
		<div className='ovalle98-row ovalle98-pt-10'>
			<p className='ovalle98-fs-11'>{MIN}</p>
			<input type='range'
				min={MIN}
				max={MAX}
				step={1}
				value={range}
				className='ovalle98-slider'
				onChange={(e) => setRange(e.target.value)}
			/>
			<p className='ovalle98-fs-11'>{MAX}</p>
		</div>
	)
}

export default SliderPass