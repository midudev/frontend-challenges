const PASSWORD_CHARACTERS = [
	...'0123456789abcdefghijklmnopqrstuvwxyz_-¿!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
]

export const newPassword = (number) => {
	const emptyArray = [...Array(number)]
	return emptyArray
		.map(() => {
			const randomIndex = Math.floor(Math.random() * PASSWORD_CHARACTERS.length)
			return PASSWORD_CHARACTERS[randomIndex]
		})
		.join('')
}

export const animate = (originalString, destination) => {
	destination.value = ''
	originalString.split('').forEach((character, index) => {
		// set the string at the end of the loop
		const characterRevealTimeout = window.setTimeout(() => {
			if (index === originalString.length - 1) {
				destination.value = originalString
				return
			}
			destination.value += character

			// suffle variable in the loop represent the probability
			// the character might have to shuffle.
			// The higher the number, higher the suffle.

			for (let shuffle = 15; shuffle > 0; shuffle--) {
				destination.value = destination.value.replace(
					destination.value.charAt(destination.value.length - 1),
					PASSWORD_CHARACTERS[Math.floor(Math.random() * PASSWORD_CHARACTERS.length)]
				)
			}
			const actualChars = [...destination.value.split('')]
			actualChars[index] = character
			destination.value = actualChars.join('')
			window.clearTimeout(characterRevealTimeout)
			// speed per character appearing
		}, index * 100)
	})
}
