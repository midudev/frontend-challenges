import { pickRandomItem } from '../utils/arrays'
import { randomLowercase, randomSymbol, randomUppercase } from '../utils/chars'
import { randomUnit } from '../utils/random'

const pickRandomFn = pickRandomItem

export const generatePassword = (config) => {
	const generatorsFn = []

	if (config.lower) generatorsFn.push(randomLowercase)
	if (config.upper) generatorsFn.push(randomUppercase)
	if (config.number) generatorsFn.push(randomUnit)
	if (config.symbol) generatorsFn.push(randomSymbol)

	const password = Array.from({ length: config.length }, () => pickRandomFn(generatorsFn)())

	return password.join('')
}
