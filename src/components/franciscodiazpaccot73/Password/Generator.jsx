import { useState, useEffect, useRef } from 'react'
import {
	generatePasword,
	calculateSecurityLevel,
	generatePaswordValue,
	SECURITY_COLORS,
	SECURITY_NAMES
} from '../utils'
import Icon from '../icons'

const Generator = ({ chars, length, generate }) => {
	const [password, setValue] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const [security, setSecurityLevel] = useState(0)
	const passwordInput = useRef(null)

	const handleRedo = () => {
		setIsCopied(false)
		new Promise((resolve) => {
			const value = generatePaswordValue(length, chars)
			resolve(value)
		}).then((newPassword) => {
			setValue(newPassword)
			const securityLevel = calculateSecurityLevel(newPassword)
			setSecurityLevel(securityLevel)
			generatePasword(passwordInput.current, newPassword)
		})
	}

	useEffect(() => {
		if (generate) {
			handleRedo()
		}
	}, [generate])

	useEffect(() => {
		handleRedo()
	}, [])

	const handleCopy = () => {
		if (password.length > 0) {
			navigator.clipboard.writeText(password)
			setIsCopied(true)
		}
	}

	return (
		<div>
			<div className='text-amber-600 relative flex items-center justify-between'>
				<span
					className='overflow-hidden inline-block whitespace-nowrap'
					style={{ maxWidth: '80%' }}
					onClick={handleCopy}
					ref={passwordInput}
					id='password'
				/>
				<div className='flex h-6 items-center'>
					{isCopied ? <Icon type='check' /> : <Icon type='copy' callback={handleCopy} />}
					<Icon type='redo' callback={handleRedo} />
				</div>
			</div>
			<div className='flex items-center mt-2'>
				{[0, 1, 2, 3].map((type) => {
					const showLevel = security >= type

					return (
						<div
							key={`security-level-${type}`}
							className='rounded-sm overflow-hidden relative mr-2 w-7 h-1.5 text-amber-600 text-sm'
						>
							<div
								style={{
									border: `${showLevel ? 'none' : '0.5px solid #d97706'}`,
									backgroundColor: `${showLevel ? SECURITY_COLORS[type] : 'transparent'}`
								}}
								className='absolute left-0 top-0 w-7 h-1.5'
							/>
						</div>
					)
				})}
				<span className='text-amber-600 text-xs ml-2'>{SECURITY_NAMES[security]}</span>
			</div>
		</div>
	)
}

Generator.defaultProps = {
	chars: '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	length: 12
}

export default Generator
