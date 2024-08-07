const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const letters = [...String.fromCharCode(...Array(123).keys()).slice(97)]
const dict = numbers.concat(letters)

const GeneratePassword = (filters) => {
	let password = ''
	for (let i = 1; i <= filters.length; i++) {
		password += dict[Math.floor(Math.random() * dict.length)]
	}
	return password
}
export default GeneratePassword
