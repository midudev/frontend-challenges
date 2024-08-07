export const randomBetween = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomUnit = () => {
	return randomBetween(0, 9)
}
