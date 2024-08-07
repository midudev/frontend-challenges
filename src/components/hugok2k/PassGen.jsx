import { useState } from 'react'
import './styles.css'
import CopySVG from './svg/CopySVG'
import ArrowSVG from './svg/ArrowSVG'
import LogoHack from './svg/LogoHack'
import randomPassword from './utils/randomPassword'
import InputCheck from './InputCheck'

export default function PassGen() {
	const [input, setInput] = useState(12)
	const [password, setPassword] = useState('')
	const [option, setOption] = useState({ words: false, number: false, symbol: false })
	const [copy, setCopy] = useState(false)

	function copyClip() {
		navigator.clipboard.writeText(password)
		// alert('Copied password: ' + password)
		setCopy(true)
		setTimeout(() => {
			setCopy(false)
		}, 1500)
	}
	function handle(e) {
		setInput(e)
		setPassword(randomPassword(input, option))
	}
	if (!password) setPassword(randomPassword(input, option))
	return (
		<div className='containerpassgen-hugok2k'>
			<header className='headercontainer-hugok2k'>
				<a href='https://hacktoberfest.com/' target='_blank'>
					<LogoHack />
					<div className='containercheck-hugok2k'></div>
				</a>
			</header>
			<h1 className='title-hugok2k'>Password generator</h1>
			<label className={copy ? 'labelcopy-hugok2k-show' : 'labelcopy-hugok2k'}>Copiado</label>
			<div className='containerinput-hugok2k'>
				<input className='inputcont-hugok2k' type='text' readOnly defaultValue={password} />
				<button className='svgcopy-hugok2k' onClick={copyClip}>
					<CopySVG />
				</button>
				<button
					className='svggenerate-hugok2k'
					onClick={() => setPassword(randomPassword(input, option))}
				>
					<ArrowSVG />
				</button>
			</div>
			<div className='containerrange-hugok2k'>
				<input
					className='inputrange-hugok2k'
					type='range'
					min='8'
					max='25'
					value={input}
					readOnly
					onChange={(e) => handle(e.target.value)}
				/>
				<label className='labelrange-hugok2k'>{input}</label>
			</div>
			<div>
				<button
					className='button-hugok2k'
					onClick={() => setPassword(randomPassword(input, option))}
				>
					Generar
				</button>
				<button className='button-hugok2k' onClick={() => copyClip()}>
					Copiar
				</button>
			</div>
			<section className=''>
				<InputCheck level='Números' checked='number' option={option} setOption={setOption} />
				<InputCheck
					level='Caracteres especiales !@#$...'
					checked='symbol'
					option={option}
					setOption={setOption}
				/>
				<InputCheck
					level='Palabras fáciles'
					checked='words'
					option={option}
					setOption={setOption}
				/>
			</section>
		</div>
	)
}
