import { useContext } from 'react'
import passwordContext from '../context/PasswordContext'
import InputRange from './common/options/InputRange'

const InputRangePassword = () => {
	const { passwordLength, setPasswordLength } = useContext(passwordContext)

	return (
		<InputRange
			id='input-password'
			title='Password length'
			value={passwordLength}
			onChange={setPasswordLength}
			max={50}
		/>
	)
}

export default InputRangePassword
