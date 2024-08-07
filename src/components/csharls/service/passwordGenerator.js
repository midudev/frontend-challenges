export default function generatePassowrd({ length }) {
	const seed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"$%&()=?{}'

	const res = []

	while (res.length <= length) {
		const letter = seed.charAt(Math.random() * 100)
		if (!res.some((l) => l === letter)) {
			res.push(letter)
		}
	}
	return res.join('')
}
