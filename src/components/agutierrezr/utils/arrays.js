import { randomBetween } from './random'

export const pickRandomItem = (array) => {
	return array[randomBetween(0, array.length - 1)]
}
