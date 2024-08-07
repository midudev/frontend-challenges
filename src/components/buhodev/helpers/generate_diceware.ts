export function generateDiceware(rolls: 4 | 5) {
	return Array(rolls)
		.fill('')
		.map(() => Math.floor(Math.random() * 6) + 1)
		.join('')
}
