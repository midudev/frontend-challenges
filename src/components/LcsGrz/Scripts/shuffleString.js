export default function shuffleString(string) {
	const stringArray = string.split('')

	for (let i = stringArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))

		;[stringArray[i], stringArray[j]] = [stringArray[j], stringArray[i]]
	}

	return stringArray.join('')
}
