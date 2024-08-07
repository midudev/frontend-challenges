import { useRef } from 'react'

import { Icon } from '../index.js'
import { handleFn, icons } from '../../utils/index.js'

import './styles.css'

const Password = ({
	onCopyToClipboard,
	onChange,
	onGenerate,
	password,
	leyend,
	strengthId,
	...props
}) => {
	const inputRef = useRef()
	const handleInputChange = (event) => handleFn(onChange)(event.target.value)
	const handleCopyToClipboard = () => onCopyToClipboard(password)
	const handleFocus = () => {
		inputRef.current?.select()
	}
	return (
		<div className='password'>
			<button type='button' className='password-element' onClick={onGenerate}>
				<Icon>{icons.iconGenerate}</Icon>
			</button>
			<div className='password-element password-container'>
				<input
					ref={inputRef}
					className='password-input'
					type='text'
					placeholder='password'
					value={password}
					onChange={handleInputChange}
					onFocus={handleFocus}
				/>
				{/* <div className='password-leyend'>{leyend}</div> */}
				<div className='password-strength'>
					{new Array(4).fill('').map((n, index) => (
						<span
							key={index}
							className={`password-strength-node${
								password.length > 0 && strengthId >= index ? ' password-strength-node--active' : ''
							}`}
						/>
					))}
				</div>
			</div>
			<button type='button' className='password-element' onClick={handleCopyToClipboard}>
				<Icon>{icons.iconCopy}</Icon>
			</button>
		</div>
	)
}

export default Password
