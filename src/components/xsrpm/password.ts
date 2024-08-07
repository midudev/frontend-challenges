export type Options = {
	uppercase?: boolean
	lowercase?: boolean
	numbers?: boolean
	symbols?: boolean
}

const getArray = (options: Options) => {
	const array = []
	if (options?.uppercase) array.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
	if (options?.lowercase) array.push('abcdefghijklmnopqrstuvwxyz')
	if (options?.numbers) array.push('0123456789')
	if (options?.symbols) array.push('!#$&*@')
	return array
}

export const randPassword = (length, options: Options = { uppercase: true }) => {
	const arrayOptions = getArray(options)
	const generatedArray = []
	for (let i = 0; i < length; i++) {
		generatedArray.push(arrayOptions[Math.floor(Math.random() * arrayOptions.length)])
	}
	return generatedArray.map((x) => x[Math.floor(Math.random() * x.length)]).join('')
}
