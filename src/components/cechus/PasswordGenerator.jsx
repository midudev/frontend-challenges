import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import styles from './PasswordGenerator.module.css'
import { DEFAULT_SETTING, DELIMITERS } from './constants'
import { getRandomPassword, leetText } from './utils/utils'

export default function PasswordGenerator() {
	const [formData, setFormData] = useState(() => {
		const userSettings = JSON.parse(localStorage.getItem('userSettings')) || {}
		return {
			charLength: userSettings.charLength || 8,
			withNumbers: userSettings.withNumbers || false,
			withSymbols: userSettings.withSymbols || false,
			withWords: userSettings.withWords || false,
			wordLength: userSettings.wordLength || 5,
			wordSeparator: userSettings.wordSeparator || 'space'
		}
	})
	const [password, setPassword] = useState('test')

	useEffect(() => {
		generatePassword()
		storeSettings()
	}, [formData])

	const storeSettings = () => {
		localStorage.setItem('userSettings', JSON.stringify(formData))
	}

	const generatePassword = (event) => {
		event?.preventDefault()
		const newPassword = getRandomPassword(formData)
		setPassword(newPassword)
	}

	const onUpdateForm = (key, value) => {
		setFormData((prevForm) => ({
			...prevForm,
			[key]: value
		}))
	}

	const copyToClipboardWithExecCommand = () => {
		const textarea = document.createElement('textarea')
		textarea.value = password
		textarea.style.opacity = 0
		document.body.appendChild(textarea)
		textarea.select()
		document.execCommand('copy')
		document.body.removeChild(textarea)
	}

	const copyToClipboard = () => {
		if (!navigator.clipboard) {
			copyToClipboardWithExecCommand()
			return
		}
		navigator.clipboard.writeText(password)
	}

	return (
		<div
			className={`${styles.card} w-full h-auto font-mono p-4 rounded-sm selection:text-[#170f1e] selection:bg-[#a5f71e] text-white`}
		>
			<h1
				className='text-2xl text-center font-especial uppercase font-bold mb-5 select-none'
				data-value='Password Generator'
				onMouseOver={(e) => leetText(e.target, true)}
				onMouseLeave={(e) => leetText(e.target, false)}
			>
				Password Generator
			</h1>
			<form onSubmit={generatePassword} className='flex flex-col gap-y-2'>
				<div className='flex min-h-[50px] gap-3 items-center'>
					<p className='p-3 bg-transparent border-b-2 w-full break-all focus:outline-none'>
						{password}
					</p>
					<button
						type='button'
						onClick={copyToClipboard}
						className='bg-transparent border-none hover:text-[#a5f71e] h-min'
						title='Copy to clipboard'
					>
						<svg
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
							/>
						</svg>
					</button>
				</div>
				<div className='flex items-center '>
					<input
						id='range'
						type='range'
						min={
							formData.withWords
								? DEFAULT_SETTING.MIN_WORDS_LENGTH
								: DEFAULT_SETTING.MIN_CHAR_LENGTH
						}
						max={
							formData.withWords
								? DEFAULT_SETTING.MAX_WORDS_LENGTH
								: DEFAULT_SETTING.MAX_CHAR_LENGTH
						}
						value={formData.withWords ? formData.wordLength : formData.charLength}
						className={`w-full h-2 bg-gray-100 appearance-none cursor-pointer transition-all ease-in-out ${styles.range}`}
						onChange={(e) => {
							if (formData.withWords) {
								onUpdateForm('wordLength', +e.target.value)
							} else {
								onUpdateForm('charLength', +e.target.value)
							}
						}}
					/>
					<span className='w-10 text-center'>
						{formData.withWords ? formData.wordLength : formData.charLength}
					</span>
				</div>
				<Checkbox
					label='Words'
					id='words'
					value={formData.withWords}
					onChange={() => onUpdateForm('withWords', !formData.withWords)}
				/>
				{formData.withWords && (
					<div className='relative'>
						<select
							className={`${styles.select} cursor-pointer block appearance-none w-full bg-transparent border-b-2 focus:border-b-[#a5f71e] hover:border-b-[#a5f71e] outline-none text-white py-3 px-4 leading-tight`}
							value={formData.wordSeparator}
							onChange={(e) => onUpdateForm('wordSeparator', e.target.value)}
						>
							{Object.entries(DELIMITERS).map(([value, { label }]) => {
								return (
									<option key={value} value={value}>
										{label}
									</option>
								)
							})}
						</select>
						<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white'>
							<svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'></path>
							</svg>
						</div>
					</div>
				)}
				{!formData.withWords && (
					<div className='flex gap-x-7'>
						<Checkbox
							label='Symbols'
							id='symbols'
							value={formData.withSymbols}
							onChange={() => onUpdateForm('withSymbols', !formData.withSymbols)}
						/>
						<Checkbox
							label='Numbers'
							id='numbers'
							value={formData.withNumbers}
							onChange={() => onUpdateForm('withNumbers', !formData.withNumbers)}
						/>
					</div>
				)}

				<button
					title='Regenerate Password'
					onMouseOver={(e) => leetText(e.target, true)}
					onMouseLeave={(e) => leetText(e.target, false)}
					className={`w-full font-bold font-sans flex items-center justify-center py-2 tracking-wider rounded-xs uppercase border-none transition-all ease-in-out text-[#170f1e] bg-[#e5e1e6] hover:bg-[#a5f71e] ${styles['regenerate-button']}`}
					data-value='REGENERATE'
				>
					REGENERATE
				</button>
			</form>
		</div>
	)
}
