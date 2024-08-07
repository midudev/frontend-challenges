import { useState, useEffect } from 'react'
import generatePass from './generatePass'
const FORMAT_OPTIONS = {
	NUMBER: 'number',
	UPPER_CASE: 'upperCase',
	SPECIAL_CHART: 'special chart'
}
const initValue = {}
initValue[FORMAT_OPTIONS.NUMBER] = true
initValue[FORMAT_OPTIONS.UPPER_CASE] = true
initValue[FORMAT_OPTIONS.SPECIAL_CHART] = true

const usePassGenerate = () => {
	const [passGenerated, setPassGenerated] = useState('')
	const [digits, setDigits] = useState(() => '8')
	const [format, setFormat] = useState(initValue)
	useEffect(() => {
		const pass = generatePass(
			digits,
			format[FORMAT_OPTIONS.SPECIAL_CHART],
			format[FORMAT_OPTIONS.UPPER_CASE],
			format[FORMAT_OPTIONS.NUMBER]
		)
		setPassGenerated(pass)
	}, [digits, format])

	const changeFormat = ({ name, value }) => {
		setFormat((prev) => ({ ...prev, [name]: value }))
	}
	const changeDigits = (value) => {
		setDigits(value)
	}
	const namesKey = Object.keys(format)
	return {
		changeDigits,
		changeFormat,
		digits,
		format,
		passGenerated,
		namesKey,
		FORMAT_OPTIONS
	}
}

export default usePassGenerate
