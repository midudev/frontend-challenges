import { createSignal, onMount } from 'solid-js'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = '0123456789'.split('')
const UPPERCASE = LETTERS.split('')
const LOWERCASE = LETTERS.toLowerCase().split('')
const SPECIAL_CHARS = '@#$%&*-_=+!/?()'.split('')

function PasswordGenerator() {
	const [passwordLength, setPasswordLength] = createSignal(14)
	const [uppercase, setUppercase] = createSignal(true)
	const [lowercase, setLowercase] = createSignal(true)
	const [specialChars, setSpecialChars] = createSignal(false)
	const [numbers, setNumbers] = createSignal(false)
	const [password, setPassword] = createSignal('')

	onMount(() => {
		generatePassword()
	})

	const onRangeChange = (event) => {
		const lengthChosen = event.target.value
		setPasswordLength(lengthChosen)
		generatePassword()
	}

	const generatePassword = () => {
		let charArray = []
		let generatedPassword = ''

		if (uppercase()) {
			charArray = [...charArray, ...UPPERCASE]
		}

		if (lowercase()) {
			charArray = [...charArray, ...LOWERCASE]
		}

		if (specialChars()) {
			charArray = [...charArray, ...SPECIAL_CHARS]
		}

		if (numbers()) {
			charArray = [...charArray, ...NUMBERS]
		}

		if (charArray.length <= 0) return

		const maxArrayIndex = charArray.length
		const minArrayIndex = 0
		for (let idx = 0; idx < passwordLength(); idx++) {
			const randomIndex = Math.floor(
				Math.random() * (maxArrayIndex - minArrayIndex) + minArrayIndex
			)

			generatedPassword += charArray[randomIndex]
		}

		setPassword(generatedPassword)
	}

	const copyPasswdToClipboard = () => {
		navigator.clipboard.writeText(password()).catch((error) => {
			alert('An error ocurred copying to the clipboard')
			console.error(error)
		})
	}

	return (
		<>
			<div class='bg-slate-200 w-[400px] h-auto rounded-xl rounded-b-2xl flex flex-col items-center justify-center'>
				<div class='flex flex-col items-center justify-center gap-1 p-4 w-[85%]'>
					<p class='text-xl font-bold text-slate-500 my-4'>
						<span class='font-extrabold text-slate-800'>Choose</span>
						<br />
						some properties to create a solid password
					</p>
					<label for='passwordLenght' class='block mb-2 text-lg font-bold text-slate-800'>
						Lenght
					</label>
					<div class='w-full inline-flex gap-4'>
						<input
							id='passwordLenght'
							type='range'
							class='w-full accent-orange-600'
							min={6}
							max={20}
							value={passwordLength()}
							step={2}
							onChange={(evt) => onRangeChange(evt)}
						/>
						<span class='text-lg font-bold text-slate-500'>{passwordLength()}</span>
					</div>
					<span class='flex flex-col items-start gap-2 w-full'>
						<span class='font-bold text-slate-500'>Include</span>
						<label for='uppercase' class='inline-flex relative items-center cursor-pointer'>
							<input
								type='checkbox'
								checked={uppercase()}
								onChange={() => setUppercase(!uppercase())}
								id='uppercase'
								class='sr-only peer'
							/>
							<div class="w-11 h-6 bg-slate-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Uppercase</span>
						</label>
						<label for='lowercase' class='inline-flex relative items-center cursor-pointer'>
							<input
								type='checkbox'
								checked={lowercase()}
								onChange={() => setLowercase(!lowercase())}
								id='lowercase'
								class='sr-only peer'
							/>
							<div class="w-11 h-6 bg-slate-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Lowercase</span>
						</label>
						<label for='specialchars' class='inline-flex relative items-center cursor-pointer'>
							<input
								type='checkbox'
								checked={specialChars()}
								onChange={() => setSpecialChars(!specialChars())}
								id='specialchars'
								class='sr-only peer'
							/>
							<div class="w-11 h-6 bg-slate-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Special</span>
						</label>
						<label for='numbers' class='inline-flex relative items-center cursor-pointer'>
							<input
								type='checkbox'
								checked={numbers()}
								onChange={() => setNumbers(!numbers())}
								id='numbers'
								class='sr-only peer'
							/>
							<div class="w-11 h-6 bg-slate-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
							<span class='ml-3 text-sm font-medium text-gray-900'>Numeric</span>
						</label>
					</span>
				</div>
				<div class='p-2 bg-slate-800 rounded-b-xl text-center w-full'>
					<div class='inline-flex justify-around items-center my-4 gap-2'>
						<input
							class='w-full h-[30px] bg-transparent text-xl font-thin text-center text-slate-200'
							type='text'
							value={password()}
							disabled
						/>
						<button
							onClick={copyPasswdToClipboard}
							class='p-2 rounded-[50%] border-transparent hover:border-orange-600 hover:rounded-[50%] border-[1px]'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								class='w-6 h-6 stroke-orange-600 fill-transparent'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
								/>
							</svg>
						</button>
						<button
							onClick={generatePassword}
							class='p-2 rounded-[50%] border-transparent hover:border-orange-600 hover:rounded-[50%] border-[1px]'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								class='w-6 h-6 stroke-orange-600 fill-transparent'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default PasswordGenerator
