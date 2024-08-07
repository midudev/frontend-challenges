import { useContext, useEffect, useState } from 'react'
import passwordContext from '../context/PasswordContext'
import scaleList from '../utils/scale-list'

// Validate length password AND length options according to state
const validate = (password, options, params) => {
	if (!params.options) {
		return password.length >= params.length
	}

	return (
		password.length >= params.length &&
		params.options &&
		Object.keys(options).length >= params.options
	)
}

const useStatusPassword = () => {
	const [scale, setScale] = useState()
	const { password, optionsCharacter } = useContext(passwordContext)

	useEffect(() => {
		if (password) {
			const findScale = Object.entries(scaleList)
				.reverse()
				.find(([, scale]) =>
					scale.validates?.find((validateOptions) =>
						validate(password, optionsCharacter, validateOptions)
					)
				)

			setScale(findScale ? findScale[0] : 'very_bad')
		}
	}, [password])

	return scaleList[scale].values
}

export default useStatusPassword
