import React, { useRef, useState } from 'react'
import './styles.css'
import heartImg from './media/heart.png'
import music from './media/undertale-shop-theme.mp3'
import usePassword from '../../../hooks/MrVega01/usePassword'

export default function ShopInterface() {
	// States for password
	const [password, setPassword] = useState('')
	const [passwordLength, setPasswordLength] = useState('15')
	// States for menu
	const [actualText, setActualText] = useState('initialText')
	const [actualOptions, setActualOptions] = useState('initialOptions')
	// State for charactersType
	const [charactersType, setCharactersType] = useState({
		uppercase: true,
		numbers: true,
		symbols: true
	})
	// State for music
	const [isPlaying, setIsPlaying] = useState(false)

	// Refs
	const audioRef = useRef()

	// Events
	function setInterfaceInitial() {
		setActualText('initialText')
		setActualOptions('initialOptions')
	}
	function setInterfaceGenerate() {
		setPassword(usePassword(passwordLength, charactersType))

		setActualText('passwordText')
		setActualOptions('copyPasswordOptions')
	}
	function setInterfacePasswordLength() {
		setActualText('passwordLengthText')
		setActualOptions('backOption')
	}
	function setInterfaceCharactersTypes() {
		setActualText('charactersTypeText')
		setActualOptions('backOption')
	}
	// Handlers
	function copyButtonHandler() {
		navigator.clipboard.writeText(password)
	}
	function musicButtonHandler() {
		isPlaying ? audioRef.current.pause() : audioRef.current.play()

		setIsPlaying(!isPlaying)
	}

	return (
		<div className='shopInterface'>
			<div className='shopMenu'>
				<div className='shopText'>
					<h1 style={actualText === 'initialText' ? {} : { display: 'none' }}>* Hello traveler.<br/>* How can I help you?</h1>

					<input style={actualText === 'passwordLengthText' ? {} : { display: 'none' }} type='range' className='rangeInput' min='5' max='25' value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)}></input>

					<h1 style={actualText === 'passwordText' ? {} : { display: 'none' }}>* {password}</h1>

					<ul style={actualText === 'charactersTypeText' ? {} : { display: 'none' }} className='charactersType'>
						<li
							onClick={() => setCharactersType({ ...charactersType, uppercase: !charactersType.uppercase })}
							className={charactersType.uppercase ? 'typeEnable' : ''}
						>Uppercase</li>
						<li
							onClick={() => setCharactersType({ ...charactersType, numbers: !charactersType.numbers })}
							className={charactersType.numbers ? 'typeEnable' : ''}
						>Numbers</li>
						<li
							onClick={() => setCharactersType({ ...charactersType, symbols: !charactersType.symbols })}
							className={charactersType.symbols ? 'typeEnable' : ''}
						>Symbols</li>
					</ul>
				</div>
				<div className='shopOptions'>
					<ul style={actualOptions === 'initialOptions' ? {} : { display: 'none' }}>
						<li onClick={setInterfaceGenerate}><img src={heartImg.src}/>Generate Password</li>
						<li onClick={setInterfacePasswordLength}><img src={heartImg.src}/>Change password length</li>
						<li onClick={setInterfaceCharactersTypes}><img src={heartImg.src}/>Change characters types</li>
						<li onClick={musicButtonHandler}><img src={heartImg.src}/>{isPlaying ? 'Stop song' : 'Play song'}</li>
						<li><img src={heartImg.src}/><a href='https://www.linkedin.com/in/jos%C3%A9-vega-89135421a/' target='blank' rel='linkedin-profile'>Contact me!</a></li>
					</ul>

					<ul style={actualOptions === 'backOption' ? {} : { display: 'none' }}>
						<li onClick={setInterfaceInitial}><img src={heartImg.src}/>Back</li>
					</ul>

					<ul style={actualOptions === 'copyPasswordOptions' ? {} : { display: 'none' }}>
						<li onClick={copyButtonHandler}><img src={heartImg.src}/>Copy password</li>
						<li onClick={setInterfaceInitial}><img src={heartImg.src}/>Back</li>
					</ul>
				</div>
			</div>
			<div className='passwordParameters'>
				<h2>Password length: {passwordLength}</h2>
			</div>
			<audio src={music} ref={audioRef} loop />
		</div>
	)
}