const CheckBox = ({ label, handleClick, chars }) => {
	const setPasswordChars = (checked) => {
		if (!checked) {
			return handleClick(chars, false)
		}
		handleClick(chars, true)
	}

	return (
		<div className=''>
			<input
				type='checkbox'
				id={`slydragon-checkbox-${label}`}
				onClick={(evt) => setPasswordChars(evt.target.checked)}
			/>
			<label htmlFor={`slydragon-checkbox-${label}`} className='text-white font-thin italic ml-1'>
				{label}
			</label>
		</div>
	)
}

export default CheckBox
