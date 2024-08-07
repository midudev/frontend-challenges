import { useEffect, useState } from 'react'

import CopyIcon from './icons/copy.svg'
import { MAX, CHARS } from './utils'
import InputRange from './InputRange'

import './Card.css'

export default function Card() {
	const [randomString, setRandomString] = useState('')
	const [isCopied, setIsCopied] = useState(false)
	const [length, setLength] = useState(Math.floor(MAX / 2))

	useEffect(() => {
		handleGenerate()
	}, [length])

	function handleGenerate() {
		let randomString = ''
		for (let i = 0; i < length; i++) {
			randomString += CHARS.charAt(Math.floor(Math.random() * CHARS.length))
		}
		setRandomString(randomString)
	}

	useEffect(() => {
		handleCopy()
	}, [randomString])

	function handleCopy() {
		navigator.clipboard.writeText(randomString)
		setIsCopied(true)
	}

	useEffect(() => {
		if (isCopied) {
			setTimeout(() => {
				setIsCopied(false)
			}, 1000)
		}
	}, [isCopied])

	return (
		<>
			{isCopied && <p className='tooltip-salteadorneo'>¡Copiado!</p>}
			<div className='card-salteadorneo'>
				<h1 className='title'>Generador de contraseñas</h1>

				<div className='input-container'>
					<input type='text' className='result' defaultValue={randomString} readOnly />
					<button onClick={handleCopy}>
						<img src={CopyIcon} alt='Copiar' />
					</button>
				</div>

				<div className='length'>
					<span>Longitud</span>
					<span>{length}</span>
				</div>
				<InputRange length={length} setLength={setLength} />

				<button onClick={handleGenerate} className='btn'>
					Generar
				</button>
			</div>
		</>
	)
}
