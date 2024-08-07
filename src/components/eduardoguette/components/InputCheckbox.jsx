
export const InputCheckbox = ({ labelText, name, value, valuesForm }) => {
	const handleInputCheckboxChange = ({ target }) => {
		let counterCheckIsTrue = 0
		for (const inputCheck in valuesForm) {
			if (valuesForm[inputCheck] === true) {
				counterCheckIsTrue += 1
			}
		}
		if (counterCheckIsTrue <= 1) {
			target.value = true
			target.checked = true
			valuesForm[target.name] = true
			return
		}
		const value = !valuesForm[target.name]
		valuesForm[target.name] = value
	}
	return (
		<label htmlFor={name} className='flex items-center justify-between w-full'>
			<p className='text-sm md:text-base'>{labelText}</p>
			<input
				className='border scale-150 input_eduardoguette'
				onChange={handleInputCheckboxChange}
				type='checkbox'
				name={name}
				id={name}
				defaultChecked={value}
				value={value}
			/>
		</label>
	)
}
