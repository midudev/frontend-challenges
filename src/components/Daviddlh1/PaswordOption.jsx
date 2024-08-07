import { useRef } from 'react'
import './styles/PasswordOption.css'

const PasswordOption = ({ handleClick, name, optionMessage }) => {
	const checkboxRef = useRef(null)

	const checkCheckboxWithSpan = () => {
		console.log(checkboxRef)
		checkboxRef.current.checked = !checkboxRef.current.checked
		handleClick(checkboxRef)
	}

	return (
		<div className='password-option__option-container'>
			<div className='password-option__chekbox--container'>
				<input
					ref={checkboxRef}
					className='password-option__chekbox'
					type='checkbox'
					onClick={handleClick}
					name={name}
					id={name}
				/>
				<span onClick={checkCheckboxWithSpan} className='password-option__chekbox--checkmark'></span>
			</div>
			<p onClick={checkCheckboxWithSpan}>{optionMessage}</p>
		</div>
	)
}

export default PasswordOption
