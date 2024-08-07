import React from 'react'

function Checkbox(props) {
	const { value, onChange } = props

	return (
		<div className='ml-5'>
			<input type='checkbox' checked={value} onChange={onChange} />
		</div>
	)
}

export default Checkbox
