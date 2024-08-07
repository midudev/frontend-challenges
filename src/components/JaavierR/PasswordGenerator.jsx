import { useEffect, useState } from 'react'
import { Clipboard, ClipboardClicked } from './components/ClipboardIcons'
import { InputSwitch } from './components/InputSwitch'
import {
	randomPassword,
	pinCode,
	smartPassword,
	memorablePassword
} from './helper/passwordGenerator'
import SelectPasswordType from './components/SelectPasswordType'
import SelectSeparator from './components/SelectSeparator'
import { InputRangeSelector } from './components/InputRangeSelector'
import { PasswordDisplay } from './components/PasswordDisplay'
import { validatePasswordMinMaxLength } from './helper/utils'

function PasswordGenerator() {
	const [passwordType, setPasswordType] = useState('Smart Password')
	const [copied, setCopied] = useState(false)
	const [regenerate, setRegenerate] = useState(false)
	const [password, setPassword] = useState(smartPassword())

	const [randomOpts, setRandomOpts] = useState({
		length: 12,
		includeNumbers: false,
		includeSymbols: false
	})

	const [memorableOpts, setMemorableOpts] = useState({
		separator: 'Hyphens',
		capitalize: false,
		fullWords: false,
		wordCount: 6
	})

	const [pinOpts, setPinOpts] = useState({ length: 4 })

	const passwordGenerators = {
		'Random Password': randomPassword(randomOpts),
		'Smart Password': smartPassword(),
		'Memorable Password': memorablePassword(memorableOpts),
		'PIN Code': pinCode(pinOpts)
	}

	const passwordLengthSetter = {
		'Random Password': (newLength) => setRandomOpts({ ...randomOpts, length: newLength }),
		'Memorable Password': (newLength) =>
			setMemorableOpts({ ...memorableOpts, wordCount: newLength }),
		'PIN Code': (newLength) => setPinOpts({ length: newLength })
	}

	useEffect(() => {
		setPassword(passwordGenerators[passwordType])
	}, [passwordType, regenerate, randomOpts, memorableOpts, pinOpts])

	function handleChange(e) {
		passwordLengthSetter[passwordType](e.target.value)
	}

	function checkLength(e) {
		let length = e.target.value
		length = validatePasswordMinMaxLength({ type: passwordType, length })
		passwordLengthSetter[passwordType](length)
	}

	function copyClipboard() {
		navigator.clipboard.writeText(password.join(''))
		setCopied(true)
		setTimeout(() => {
			setCopied(false)
		}, 1500)
	}

	return (
		<div className='relative text-white p-10 rounded-xl ring-1 ring-neutral-100/10 backdrop-blur w-full bg-neutral-800/30 shadow mx-auto font-["JetBrains_Mono"]'>
			<div className='absolute flex -bottom-px left-1/2 -ml-32 sm:-ml-48 h-[0.125rem] w-64 sm:w-96'>
				<div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
				<div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,rgba(14,165,233,0.5)_42.29%,rgba(236,72,153,0.4)_57.19%,rgba(236,72,153,0)_100%)]'></div>
			</div>

			<h1 className='text-xl sm:text-3xl font-semibold capitalize mb-8 font-special'>
				Password Generator
			</h1>

			<div className='flex items-center justify-between mb-4'>
				<button
					type='button'
					className='inline-flex text-center items-center px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-lg capitalize text-sm font-semibold tracking-wide'
					onClick={() => setRegenerate(!regenerate)}
				>
					Generate
				</button>

				<button
					className='group relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-neutral-500/20'
					onClick={copyClipboard}
				>
					{copied ? <ClipboardClicked /> : <Clipboard />}
				</button>
			</div>

			<PasswordDisplay password={password} />

			<div className='divide-y divide-neutral-100/10'>
				<SelectPasswordType
					label='Type'
					name='Type'
					value={passwordType}
					onChange={(e) => setPasswordType(e.target.value)}
				/>

				{passwordType === 'Random Password' && (
					<>
						<InputRangeSelector
							label='Characters'
							name='Characters'
							min={8}
							max={100}
							value={randomOpts.length}
							onChange={handleChange}
							onBlur={checkLength}
						/>

						<InputSwitch
							label='Numbers'
							value={randomOpts.includeNumbers}
							onChange={() =>
								setRandomOpts({ ...randomOpts, includeNumbers: !randomOpts.includeNumbers })
							}
							className='py-4'
						/>

						<InputSwitch
							label='Symbols'
							value={randomOpts.includeSymbols}
							onChange={() =>
								setRandomOpts({ ...randomOpts, includeSymbols: !randomOpts.includeSymbols })
							}
							className='py-4'
						/>
					</>
				)}

				{passwordType === 'Memorable Password' && (
					<>
						<InputRangeSelector
							label='Words'
							name='Words'
							min={3}
							max={15}
							value={memorableOpts.wordCount}
							onChange={handleChange}
							onBlur={checkLength}
						/>

						<SelectSeparator
							label='Separator'
							name='Separator'
							value={memorableOpts.separator}
							onChange={(e) => setMemorableOpts({ ...memorableOpts, separator: e.target.value })}
						/>

						<InputSwitch
							label='Capitalize'
							value={memorableOpts.capitalize}
							onChange={() =>
								setMemorableOpts({ ...memorableOpts, capitalize: !memorableOpts.capitalize })
							}
							className='py-4'
						/>

						<InputSwitch
							label='Full words'
							value={memorableOpts.fullWords}
							onChange={() =>
								setMemorableOpts({ ...memorableOpts, fullWords: !memorableOpts.fullWords })
							}
							className='py-4'
						/>
					</>
				)}

				{passwordType === 'PIN Code' && (
					<InputRangeSelector
						label='Numbers'
						name='PIN Length'
						min={4}
						max={12}
						value={pinOpts.length}
						onChange={handleChange}
						onBlur={checkLength}
					/>
				)}
			</div>
		</div>
	)
}

export default PasswordGenerator
