const STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomLetter = (str) => `${str[getRandomNumber(str.length - 1)]}`

export const passwordGenerator = (passwordLength) => {
	return [...Array(passwordLength).fill('')]
		.map(() => getRandomLetter(STR))
		.join('')
}
