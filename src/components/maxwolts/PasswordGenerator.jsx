import React, { useState, useEffect } from 'react'
import { generate } from './passwordGenerator'
import './style.css'

export const PasswordGenerator = () => {
	const [stateSelected, setStateSelected] = useState(false)
	const [valueSelected, setValueSelected] = useState(10)
	const [password, setPassword] = useState('')
	const [words, setWords] = useState('')
	const [classAnimation, setClassAnimation] = useState(false)
	const [classAnimationCopy, setClassAnimationCopy] = useState(false)

	const changeSecction = (newValue) => {
		changeState(newValue)
		setPassword('')
	}

	const changeState = (value) => {
		if (value !== stateSelected) {
			setStateSelected(value)
			setWords('')
		}
	}

	const changeValue = (event) => {
		setValueSelected(event.target.value)
	}

	const generatePassword = () => {
		if (!classAnimation && !classAnimationCopy) {
			if ((stateSelected && words) || !stateSelected) {
				setClassAnimation(true)
				setTimeout(() => {
					setPassword(generate(valueSelected, words))
				}, 1000)
			} else {
				setPassword('')
			}
		}
	}

	const saveWords = (event) => {
		setWords(event.target.value)
	}

	const copyPassword = () => {
		const aux = document.createElement('input')
		aux.setAttribute('value', password)
		document.body.appendChild(aux)
		aux.select()
		document.execCommand('copy')
		document.body.removeChild(aux)
		setClassAnimationCopy(true)
	}

	useEffect(() => {
		if (classAnimation) {
			setTimeout(() => {
				setClassAnimation(false)
			}, 2000)
		}
		if (classAnimationCopy) {
			setTimeout(() => {
				setClassAnimationCopy(false)
			}, 2000)
		}
	}, [classAnimation, classAnimationCopy])

	return (
		<main className='maxwolts-panda-pass-main'>
			<div className='maxwolts-panda-pass'>
				<div className='maxwolts-panda-pass-section-selector'>
					<button
						onClick={() => {
							changeSecction(false)
						}}
						className={!stateSelected ? 'maxwolts-selected-section' : 'maxwolts-unselected-section'}
					>
						Random
					</button>
					<button
						onClick={() => {
							changeSecction(true)
						}}
						className={stateSelected ? 'maxwolts-selected-section' : 'maxwolts-unselected-section'}
					>
						Customized
					</button>
				</div>
				<div className='maxwolts-input-range'>
					<label htmlFor='maxwolts-minmax-range'>Complex: {`${valueSelected}`}</label>
					<input
						id='maxwolts-minmax-range'
						onChange={changeValue}
						type='range'
						min='8'
						max='18'
						className='
					w-full
					h-3
					bg-indigo-100
					rounded-lg
					appearance-none
					cursor-pointer
					dark:bg-gray-400'
					/>
				</div>
				<div className={`maxwolts-add-words ${stateSelected && 'maxwolts-appear-animation'} `}>
					<label htmlFor='maxwolts-add-words'>Add words</label>
					<div
						htmlFor='maxwolts-add-words'
						className={`${!words ? 'maxwolts-no-add-words-border' : 'maxwolts-add-words-border'}`}
					>
						<input
							type='text'
							id='maxwolts-add-words'
							placeholder='like this'
							value={words}
							onChange={saveWords}
						/>
					</div>
				</div>
				<div className='maxwolts-result'>
					<div className='maxwolts-panda'>
						<div className='maxwolts-panda-content'>
							<div
								className={`maxwolts-panda-face ${
									classAnimationCopy ? 'maxwolts-panda-rotate-head-animation' : ''
								} ${classAnimation ? 'maxwolts-panda-animation-face-front' : ''}`}
							>
								<div className='maxwolts-panda-eyes'>
									<div className='maxwolts-panda-eye-left'></div>
									<div className='maxwolts-panda-eye-right'></div>
								</div>
								<div className='maxwolts-panda-nose'></div>
							</div>
							<div
								className={`maxwolts-panda-sign ${
									classAnimationCopy ? 'maxwolts-panda-sign-activate-animation' : ''
								}`}
							>
								<p>{password ? 'Copied' : 'add word/s'}</p>
							</div>
						</div>
					</div>
					<div
						className={`maxwolts-result-content ${
							classAnimation || classAnimationCopy ? 'maxwolts-animation-panda-result' : ''
						}`}
					>
						<input readOnly value={password} placeholder='Result' />
						{password && (
							<button aria-label='copy password' onClick={copyPassword}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1'
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75'
									/>
								</svg>
							</button>
						)}
					</div>
				</div>
				<button className='maxwolts-generate' onClick={generatePassword}>
					Generate
				</button>
			</div>
		</main>
	)
}
