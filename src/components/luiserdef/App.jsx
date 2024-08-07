import React, { useEffect, useState } from 'react'
import GeneratedPasswordBox from './components/GeneratedPasswordBox'
import InfoPassword from './components/InfoPassword'
import generatePassword from './generatePassword'
import passwordStrength from './passwordStrength'
import Filters from './components/Filters'
import Slider from './components/Slider'
import './app.css'
import Sound from './components/sound'

function App() {
	const maxPasswordSize = 80
	const [passwordLength, setPasswordLength] = useState(8)
	const [passwordText, setPasswordText] = useState('C0ntr4señ4')
	const [isSliderActive, setIsSliderActive] = useState(false)
	const [passwordGeneratedToggle, setPasswordGeneratedToggle] = useState(false)
	const [passwordStrengthData, setPasswordStrengthData] = useState(passwordStrength(passwordText))
	const [filterStatus, setFilterStatus] = useState({
		upperCase: true,
		numbers: true,
		symbols: true
	})

	useEffect(() => {
		setPasswordStrengthData(passwordStrength(passwordText))
	}, [passwordText])

	function updateSliderValue(e) {
		const sliderLength = e.target.value
		setIsSliderActive(true)
		setPasswordLength(sliderLength)
	}

	function updateFilterStatus(filterSelection) {
		setFilterStatus((last) => ({ ...last, [filterSelection]: !last[filterSelection] }))
	}

	function createPassword() {
		setIsSliderActive(false)
		setPasswordText(generatePassword(filterStatus, passwordLength))
		setPasswordGeneratedToggle((lastState) => !lastState)
	}

	return (
		<div className='bg-[#011d2e] w-full h-screen text-white flex flex-col justify-center items-center'>
			<h1 className='luiserdef-title text-4xl pb-4 text-center font-bold'>
				Generador de contraseñas
			</h1>
			<div className='luiserdef-gp-container relative w-[80%] h-auto max-w-lg bg-[#01364d] rounded-xl px-10 flex flex-col items-center'>
				<Sound
					passwordStrengthData={passwordStrengthData}
					passwordGeneratedToggle={passwordGeneratedToggle}
				/>
				<InfoPassword
					passwordStrengthData={passwordStrengthData}
					passwordGeneratedToggle={passwordGeneratedToggle}
					isSliderActive={isSliderActive}
				/>
				<GeneratedPasswordBox passwordText={passwordText} isSliderActive={isSliderActive} />
				<Slider
					maxPasswordSize={maxPasswordSize}
					passwordLength={passwordLength}
					updateSliderValue={updateSliderValue}
				/>
				<Filters filterStatus={filterStatus} updateFilterStatus={updateFilterStatus} />
				<button
					className={`${
						isSliderActive ? 'bg-[#339ab14f]' : 'bg-[#07d3a781]'
					} luiserdef-bt-generate-pass select-none lg:hover:bg-[#43d7f1] rounded-md py-2 px-2 mt-10 mb-4`}
					onClick={createPassword}
				>
					Generar Contraseña
				</button>
			</div>
		</div>
	)
}
export default App
