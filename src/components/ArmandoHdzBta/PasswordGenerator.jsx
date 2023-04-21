import React, { useState } from 'react'
import './style.css'

const PasswordGenerator = () => {
	const [rango, setRango] = useState(6)
	const [copyState, setCopyState] = useState('Debe de generar una contraseña primero')
	const [clickcopyState, setClickCopyState] = useState(null)
	const [password, setPassword] = useState(null)
	const [reset, setReset] = useState(true)

	const setRangoValor = ({ target: { value } }) => {
		if (value < 6 || value > 20) return
		setRango(value)
	}

	const generatePassword = () => {
		const leterUpercase = 'ABCDEFGHIJKLMNOPQRSTVWXYZ'
		const leterSlowercase = 'abcdefghijklmnopqrstvwxyz'
		const numbers = '0123456789'
		const specialCharacter = '!%&$=/*+'
		const stringCaracteres = leterUpercase + leterSlowercase + numbers + specialCharacter
		let passwordGenerated = ''

		for (let i = 0; i < rango; i++) {
			passwordGenerated += stringCaracteres[getNumRandom(0, stringCaracteres.length)]
		}

		setPassword(passwordGenerated)
		setClickCopyState(null)
		setReset(false)
	}

	const getNumRandom = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const copyToClipboard = () => {
		if (!password) {
			setClickCopyState(false)
			return false
		}

		setClickCopyState(true)
		navigator.clipboard.writeText(password)
		setCopyState('La contraseña se a copiado al clipboard')
	}

	const onReset = () => {
		setRango(6)
		setClickCopyState(null)
		setPassword(null)
		setReset(true)
	}

	return (
		<div className='d-flex justify-content-center'>
			<div className='card mt-5'>
				<div className='card-header'>
					<h2 className='text-bold text-center'>Generador de contraseña</h2>
				</div>
				<div className='card-body'>
					{clickcopyState != null
						? (
							<div
								className={
									clickcopyState === false ? 'row mt-1 alert no-copy' : 'row mt-1 alert copy'
								}
							>
								{clickcopyState != null ? copyState : ''}
							</div>
						)
						: (
							''
						)}

					<div className='row d-flex justify-content-between'>
						<input
							type='text'
							name='password'
							id='password'
							readOnly
							className='only-read password'
							placeholder='Contraseña'
							value={password || ''}
						/>
						<button
							type='button'
							className='btn btn-copy text-center'
							title='Copiar'
							onClick={copyToClipboard}
						></button>
					</div>

					<div className='row d-flex justify-content-between'>
						<label className='label' htmlFor='rango'>
							Tamaño
							<input
								type='range'
								id='rango'
								name='rango'
								min='6'
								max='20'
								step='1'
								className=''
								value={rango}
								onChange={setRangoValor}
							/>
						</label>
						<input
							type='text'
							id='showRango'
							name='showRango'
							readOnly
							className='only-read rango text-center'
							value={rango}
						/>
					</div>
					<div className='row'>
						<button type='button' className='btn btn-generar' onClick={generatePassword}>
							Generar contraseña
						</button>
						<button type='button' className='btn btn-reset' disabled={reset} onClick={onReset}>
							Reset
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PasswordGenerator
