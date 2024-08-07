export default function usePassword(length, charactersType) {
	let passwordCreated = ''

	const characters = ['qwertyuiopasdfghjklzxcvbnm']
	if (charactersType.uppercase) characters.push('QWERTYUIOPASDFGHJKLZXCVBNM')
	if (charactersType.numbers) characters.push('1234567890')
	if (charactersType.symbols) characters.push('`~!@#$%%^&*()-_=+[{]};:",<.>/?')

	while (passwordCreated.length < length) {
		const positionArray = Math.floor(Math.random() * characters.length)
		const positionString = Math.floor(Math.random() * characters[positionArray].length)
		passwordCreated += characters[positionArray][positionString]
	}
	return passwordCreated
}