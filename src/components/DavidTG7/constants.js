export const randomLetter = (chars) => {
	const indexLetter = Math.floor(Math.random() * chars.length)
	const letter = chars[indexLetter]
	return letter
}
