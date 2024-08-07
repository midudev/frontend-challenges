// @utils
import shuffleString from './shuffleString'
// @configs
import settingsKeys from '../config/settingsKeys'
import getRandomNumber from './ramdomNumbers'

// ─────────────── ∞ ───────────────

const includes = {
	[settingsKeys.LOWER_CASE]: 'abcdefghijklmnñopqrstuvwxyz',
	[settingsKeys.UPPER_CASE]: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
	[settingsKeys.NUMBERS]: '0123456789',
	[settingsKeys.SIMBOLS]: '¡!¿?/|@#$%^&*()-_=+{};:[],.~^<>`',
	[settingsKeys.EMOJIS]: '★♩♪♫♥♢♦♡♣♧♠♤★☆☢☠☹☺◢▼►☽♟♞♝♜♝♛',
	[settingsKeys.ESPACES]: ' '
}

// ─────────────── ∞ ───────────────

const getEspaces = (length) => {
	if (length <= 6) return 1
	if (length <= 10) return getRandomNumber(2, 3)
	if (length <= 20) return getRandomNumber(3, 4)
	if (length <= 30) return getRandomNumber(4, 5)
	if (length <= 40) return getRandomNumber(5, 6)
	if (length <= 50) return getRandomNumber(6, 7)
	if (length <= 64) return getRandomNumber(7, 10)
}

// ─────────────── ∞ ───────────────

export function getPasswordEntropy(settings) {
	const { length, ...charsConfig } = settings

	if (length === 0) return 0

	// prettier-ignore
	const charsSet = Object.keys(charsConfig).reduce((acc, key) => (charsConfig[key] ? `${acc}${includes[key]}` : acc), '').length

	return Math.log2(charsSet) * length
}

// ─────────────── ∞ ───────────────

export default function randomPasswordGenerator(settings) {
	const { length, allowEspaces, ...charsConfig } = settings

	// prettier-ignore
	const charsSet = Object.keys(charsConfig).reduce((acc, key) => (charsConfig[key] ? `${acc}${includes[key]}` : acc), '')
	const randomChars = shuffleString(charsSet)

	const charsLength = randomChars.length
	const espacesLength = allowEspaces ? getEspaces(length) : 0

	let randomPassword = ''

	for (let i = 0; i < length - espacesLength; i++) {
		randomPassword += randomChars[Math.floor(Math.random() * charsLength)]
	}

	if (allowEspaces) {
		const espacePosition = Math.floor((length - 2) / (espacesLength + 1))

		for (let i = 1; i <= espacesLength; i++) {
			randomPassword = randomPassword.replace(new RegExp(`(.{${espacePosition * i}})`), '$1 ')
		}
	}

	return randomPassword
}
