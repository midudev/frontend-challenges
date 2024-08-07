

const generatePassword = (chars, length) => {
	if (!chars) return ''

	let password = ''
	for (const _ in [...Array(+length)]) {
		const randomNumber = Math.floor(Math.random() * chars.length)
		password += chars[randomNumber]
	}
	return password
}
export default generatePassword