import './GenPassword.css'
import { useState } from 'react'

const copiado = {
	color: 'navy'
}
const borrado = {
	color: 'crimson'
}

export const GenerarPassword = () => {
	const [banner, setBanner] = useState('')
	const [estilo, setEstilo] = useState()

	const [longitud, setLongitud] = useState(14)

	const [islower, setIsLower] = useState(true)
	const [isupper, setIsUpper] = useState(true)
	const [isnumber, setIsNumber] = useState(true)
	const [isspecial, setIsSpecial] = useState(true)

	const [resultado, setResultado] = useState('')

	const handleLong = (event) => {
		setLongitud(event.target.value)
	}

	const handleCheck = (event) => {
		if (event.target.id === 'upper') {
			setIsUpper(!isupper)
		}
		if (event.target.id === 'lower') {
			setIsLower(!islower)
		}
		if (event.target.id === 'number') {
			setIsNumber(!isnumber)
		}
		if (event.target.id === 'special') {
			setIsSpecial(!isspecial)
		}
	}

	const proceso = () => {
		const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		const lower = 'abcdefghijklmnopqrstuvwxyz'
		const number = '0123456789'
		const special = '!#$%&*+-_'
		let chars = ''

		let iterString = ''

		if (islower) {
			chars += lower
		}
		if (isupper) {
			chars += upper
		}
		if (isnumber) {
			chars += number
		}
		if (isspecial) {
			chars += special
		}

		if (chars !== '') {
			let iterChar = longitud
			while (iterChar > 0) {
				const i = parseInt(Math.random() * (chars.length - 1) + 1)
				iterString += chars[i]
				iterChar -= 1
			}
			setResultado(iterString)
		}
	}

	const copiar = () => {
		if (resultado !== '') {
			navigator.clipboard.writeText(resultado).then(
				() => {
					// console.log('exito');
					setEstilo(copiado)
					setBanner('Copied!')
					setTimeout(() => {
						setBanner('')
						setEstilo()
					}, 2000)
				},
				() => {
					console.log('error')
				}
			)
		}
	}

	const borrar = () => {
		if (resultado !== '') {
			navigator.clipboard.writeText('').then(
				() => {
					// console.log('exito');
					setEstilo(borrado)
					setBanner('Deleted!')
					setTimeout(() => {
						setBanner('')
						setEstilo()
					}, 2000)
				},
				() => {
					console.log('error')
				}
			)
		}
	}

	return (
		<div id='kurotom-contenedor'>
			<div id='kurotom-screen'>
				<div id='kurotom-screen-resultado'>{resultado}</div>

				<div id='kurotom-screen-interact'>
					<span id='kurotom-screen-banner' style={estilo}>
						{banner}
					</span>
					<div id='kurotom-screen-icons'>
						<span id='kurotom-paperclip' className='kurotom-iconApp' title='Copy' onClick={copiar}>
							&#128203;
						</span>
						<span id='kurotom-trash' className='kurotom-iconApp' title='Delete' onClick={borrar}>
							&#128465;
						</span>
					</div>
				</div>
			</div>

			<div id='kurotom-control'>
				<div id='kurotom-control-div-span'>
					<span id='kurotom-control-span1'>Length</span>
					<span id='kurotom-control-span2'>{longitud}</span>
				</div>
				<input
					id='kurotom-control-input'
					type='range'
					min='5'
					max='128'
					step='1'
					onChange={handleLong}
					value={longitud}
				/>
			</div>

			<div id='kurotom-opciones'>
				<div className='kurotom-opciones-div'>
					<span className='kurotom-opciones-span'>A-Z</span>
					<input
						id='upper'
						className='kurotom-opciones-check'
						type='checkbox'
						onChange={handleCheck}
						checked={isupper}
					/>
				</div>
				<div className='kurotom-opciones-div'>
					<span className='kurotom-opciones-span'>a-z</span>
					<input
						id='lower'
						className='kurotom-opciones-check'
						type='checkbox'
						onChange={handleCheck}
						checked={islower}
					/>
				</div>
				<div className='kurotom-opciones-div'>
					<span className='kurotom-opciones-span'>0-9</span>
					<input
						id='number'
						className='kurotom-opciones-check'
						type='checkbox'
						onChange={handleCheck}
						checked={isnumber}
					/>
				</div>
				<div className='kurotom-opciones-div'>
					<span className='kurotom-opciones-span'>!@#$%^&*</span>
					<input
						id='special'
						className='kurotom-opciones-check'
						type='checkbox'
						onChange={handleCheck}
						checked={isspecial}
					/>
				</div>
			</div>

			<div id='btn'>
				<button id='btn-button' onClick={proceso}>
					Generate
				</button>
			</div>
		</div>
	)
}
