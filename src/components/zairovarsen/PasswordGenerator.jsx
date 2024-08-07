import './styles/index.css'
import Copy from './Copy'
import Slider from './Slider'
import Checkbox from './Checkbox'
import React from 'react'
import { usePassword } from './hooks/usePassword'
import { useClipboard } from './hooks/useClipboard'

export default function PasswordGenerator() {
	const { length, setLength, value, options, changeOption, generatePassword } = usePassword()
	const { isCopied, saveToClipBoard } = useClipboard()

	return (
		<div id='zairovarsen-app'>
			<main>
				<div className='container'>
					<div className='output-container'>
						<input type='text' readOnly value={value} />
						{isCopied && <span className='copy-message'> copied </span>}
						<Copy onClick={() => saveToClipBoard(value)} />
					</div>

					<div className='input-container'>
						<span className='password-title'>
							{' '}
							<span className='password-title-text'> Length: </span> {length}{' '}
						</span>
						<Slider from={8} to={32} value={length} onChange={(e) => setLength(e.target.value)} />
						<Checkbox
							title='Include uppercase'
							checked={options.upperCase}
							onChange={() => changeOption('upperCase')}
						/>
						<Checkbox
							title='Include lowercase'
							checked={options.lowerCase}
							onChange={() => changeOption('lowerCase')}
						/>
						<Checkbox
							title='Include numbers'
							checked={options.numbers}
							onChange={() => changeOption('numbers')}
						/>
						<Checkbox
							title='Include Symbols'
							checked={options.specialCharacters}
							onChange={(e) => changeOption('specialCharacters')}
						/>
					</div>

					<button className='generate' id='generate' onClick={() => generatePassword()}>
						Generate Password
					</button>
				</div>
			</main>
		</div>
	)
}
