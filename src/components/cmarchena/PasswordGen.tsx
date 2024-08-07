import React, { useState } from 'react'
import './style.css'

type OptionType = 'ul' | 'sc' | 'nu' | 'll'
const PasswordGen: React.FC = () => {
	const [length, setLength] = useState<number>(6)
	const [password, setPassword] = useState<string>('Tu password aquí')
	const [isCopied, setIsCopied] = useState<boolean>(false)
	const [options, setOptions] = useState<OptionType[]>(['ll'])
	const [checkboxesState, setCheckboxesState] = useState<Record<string, any>[]>([
		{ value: 'minúsculas', state: true, order: 0, type: 'll' },
		{ value: 'mayúsculas', state: false, order: 1, type: 'ul' },
		{ value: 'números', state: false, order: 2, type: 'nu' },
		{ value: 'caracteres especiales', state: false, order: 3, type: 'sc' }
	])
	const genRandomString = (length: number, options?: OptionType[]): string => {
		const randomItem = (array) => array[Math.floor(Math.random() * array.length)]
		return [...Array(length)]
			.map((item) => {
				const numbers = [...Array(57 - 47)]
					.map((item, i) => {
						return String.fromCharCode(48 + i)
					})
					.join('')

				const lowercaseLetters = [...Array(122 - 96)]
					.map((item, i) => {
						return String.fromCharCode(97 + i)
					})
					.join('')

				const uppercaseLetters = [...Array(90 - 64)]
					.map((item, i) => {
						return String.fromCharCode(65 + i)
					})
					.join('')
				const specialChars = [...Array(47 - 32)]
					.map((item, i) => {
						return String.fromCharCode(33 + i)
					})
					.join('')
				const dict = {
					ll: lowercaseLetters,
					ul: uppercaseLetters,
					sc: specialChars,
					nu: numbers
				}
				const genArray = (array: string[]) => {
					let newString = ''
					array.map((item) => {
						return (newString += dict[item])
					})
					return newString
				}

				// const random = randomInteger(...smallLetters)
				// const random = randomItem([...lowercaseLetters, ...numbers])
				return !options ? randomItem(genArray([])) : randomItem(genArray(options))
			})
			.join('')
	}

	const handleGenerate = () => {
		setPassword(genRandomString(length, options))
		setIsCopied(false)
	}
	const handleClick = () => {
		navigator.clipboard.writeText(password)
		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 3000)
	}
	const handleOnChange = (e, checkbox) => {
		setOptions((prev) => {
			if (prev.find((item) => item === checkbox.type)) {
				return [...prev.filter((item) => item !== checkbox.type)]
			} else {
				return [...prev, checkbox.type]
			}
		})
		return setCheckboxesState((prev) => {
			return [
				...prev.filter((item) => item.value !== checkbox.value),
				{ ...checkbox, state: e.target.checked }
			]

			/* return {
				...prev.filter((item, i) => i !== id)
			} */
		})
	}
	return (
		<main id='swc-main'>
			<section id='swc-container'>
				<div id='swc-header'>
					<h1>Generador de passwords</h1>
					<p>¿Cuantos caracteres?</p>
				</div>

				<div className='swc-row'>
					<input
						type='range'
						id='swc-slider'
						min={1}
						max={32}
						value={length}
						step={1}
						onChange={(e) => setLength(Number(e.target.value))}
					/>
					<label htmlFor='swc-slider' className='swc-label'>
						{length}
					</label>
				</div>
				<div id='swc-select-type'>
					{checkboxesState
						.sort((a, b) => a.order - b.order)
						.map((checkbox, i) => (
							<div id='swc-checkbox-group' key={i}>
								<input
									type='checkbox'
									id={checkbox.value}
									value={checkbox.value}
									checked={checkbox.state}
									onChange={(e) => handleOnChange(e, checkbox)}
									key={i}
								/>

								<label htmlFor={checkbox.value} key={checkbox.value}>
									{checkbox.value}
								</label>
							</div>
						))}
				</div>
				<div id='swc-genpass-container'>
					<div className='swc-row'>
						<span id='swc-genpass'>{password || 'Debes seleccionar al menos una opción'}</span>
						<button
							id='swc-genpass-button'
							aria-label='copy to clipboard'
							onClick={() => handleClick()}
							className={isCopied ? 'copied' : 'default'}
						>
							{/* <span id='swc-icon' className={isCopied ? 'copied' : ''} /> */}
							{/* <span id='swc-copy-text'>{!isCopied ? 'Copiar' : '¡Copiado!'}</span> */}
						</button>
					</div>
					<button id='swc-button' onClick={() => handleGenerate()}>
						<p>Generar</p>
					</button>
				</div>
				<small>
					Creado por{' '}
					<a href='http://sprintwithcarlos.github.io' id='swc-small'>
						Sprint With Carlos
					</a>{' '}
					- 2022
				</small>
			</section>
		</main>
	)
}

export default PasswordGen
