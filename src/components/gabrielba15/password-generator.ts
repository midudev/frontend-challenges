type OptionsType = {
	uppercase: boolean
	numbers: boolean
	symbols: boolean
}

interface PasswordGeneratorParams {
	passwordLength: number
	options: OptionsType
}

export const passwordGenerator = ({ passwordLength, options }: PasswordGeneratorParams) => {
	if (!options && !passwordLength) throw new Error('Missing Params')

	const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='
	const letters = 'abcdefghijklmnopqrstuvwxyz'
	const numbers = '0123456789'
	let password = ''

	const passwordCharactersList = [
		letters,
		...(options.uppercase ? letters.toUpperCase() : []),
		...(options.numbers ? numbers : []),
		...(options.symbols ? symbols : [])
	].join('')

	for (let i = 0; i < passwordLength; i++) {
		const characterPosition = Math.floor(Math.random() * passwordCharactersList.length)
		password = password.concat(passwordCharactersList[characterPosition])
	}
	return password
}
