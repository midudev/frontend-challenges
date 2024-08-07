import { useState } from 'react'
import './App.css'

const generarContra = (tamano) => {
	let pass = ''
	const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

	for (let i = 1; i <= tamano; i++) {
		const char = Math.floor(Math.random() * str.length + 1)
		pass += str.charAt(char)
	}

	return pass
}

const App = () => {
	const [contra, setContra] = useState('SW#vZWMOqL')
	const [tamano, setTamano] = useState(10)

	const handleOnchange = (event) => {
		event.preventDefault()
		setTamano(event.target.value)
	}

	const handleOnsubmit = (event) => {
		event.preventDefault()
		setContra(generarContra(tamano))
	}

	const handleOnclick = (event) => {
		event.preventDefault()
		navigator.clipboard.writeText(contra)
	}

	return (
		<div id='app-dv' className='center-dv'>
			<section id='gen-dv' className='center-dv'>
				<form id='form-dv' className='center-dv' onSubmit={handleOnsubmit}>
					<div id='pass-cont-dv'>
						<span id='pass-dv'>{contra}</span>
						<button id='copy-btn-dv' onClick={(e) => handleOnclick(e)}>
							<img src='/David-Viuche/copy.svg' alt='copiar contraseña' />
						</button>
					</div>
					<div className='center-dv'>
						<span id='spn-rag-dv'>{tamano}</span>
						<input type='range' id='rgn-inpt-dv' min='1' max='20' value={tamano || 0} onChange={handleOnchange} onInput={handleOnchange} />
					</div>
					<button id='sub-btn-dv'>Generar</button>
				</form>
			</section>
		</div>
	)
}

export default App
