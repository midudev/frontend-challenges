import { useContext } from 'react'
import passwordContext from '../context/PasswordContext'
import InputRange from './common/options/InputRange'

const InputRangeConcurrence = () => {
	const { concurrenceLength, setConcurrenceLength } = useContext(passwordContext)

	return (
		<InputRange
			id='input-concurrence'
			title='Count concurrence'
			value={concurrenceLength}
			onChange={setConcurrenceLength}
			max={5}
		/>
	)
}

export default InputRangeConcurrence
