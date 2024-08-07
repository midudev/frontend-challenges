import { useEffect } from 'react'

// Components
import Main from './components/Main'

// Hooks
import useGeneratePassword from './hooks/useGeneratePassword'
import useLocalStorage from './hooks/useLocalStorage'
import useTimerAlert from './hooks/useTimerAlert'

// Contexts
import PasswordContext from './context/PasswordContext'

// Styles
import './index.css'

const App = () => {
	const { generateAlert, Alerts } = useTimerAlert()
	const [passwordLength, setPasswordLength] = useLocalStorage('length', '25')
	const [concurrenceLength, setConcurrenceLength] = useLocalStorage('concurrence', '1')
	const [automaticGenerator, setAutomaticGenerator] = useLocalStorage('automaticGenerator', true)
	const [optionsCharacter, setOptionsCharacter] = useLocalStorage('optionsCharacter', {
		mayus: true,
		minus: true,
		numbers: true,
		symbols: true
	})
	const { password, generateNewPassword } = useGeneratePassword()

	const handlerNewPassword = (delay = false) => {
		if (delay === true) {
			const delayDebounceFn = setTimeout(() => {
				generateNewPassword({
					length: passwordLength,
					options: optionsCharacter,
					count: concurrenceLength
				})
			}, 300)

			return () => clearTimeout(delayDebounceFn)
		}

		generateNewPassword({
			length: passwordLength,
			options: optionsCharacter,
			count: concurrenceLength
		})
	}

	useEffect(() => {
		const handlerCopyPassword = () => {
			navigator.clipboard.writeText(document.querySelector('#password-generated').value)
			generateAlert('Password copied to clipboard!', 5000, 'copy')
		}

		generateAlert(
			<>
				New password generated.
				<span className='text-blue-500 font-bold cursor-pointer pl-2' onClick={handlerCopyPassword}>
					Copy
				</span>
			</>,
			5000,
			'password'
		)
	}, [password])

	useEffect(() => {
		if (automaticGenerator) {
			return handlerNewPassword(true)
		}
	}, [passwordLength, optionsCharacter, concurrenceLength])

	/** Remove this */
	useEffect(() => {
		document.querySelector('body').classList.add('juanpablo-is--remove-content')
	}, [])

	return (
		<PasswordContext.Provider
			value={{
				password,
				handlerNewPassword,
				generateAlert,
				passwordLength,
				setPasswordLength,
				optionsCharacter,
				setOptionsCharacter,
				concurrenceLength,
				setConcurrenceLength,
				automaticGenerator,
				setAutomaticGenerator
			}}
		>
			<Main />
			<Alerts />
		</PasswordContext.Provider>
	)
}

export default App
