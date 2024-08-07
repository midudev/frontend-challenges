import { useState } from 'react'

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState)

	const reset = () => {
		setValues(initialState)
	}
	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.type !== 'checkbox' ? target.value : target.checked
		})
	}

	return [values, handleInputChange, reset]
}
