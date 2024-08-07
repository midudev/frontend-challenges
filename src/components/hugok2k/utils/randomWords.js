import { objWord } from './dictionary'
export default function randomWords() {
	let password = ''
	for (let i = 0; i < 4; i++) {
		// 0 al 2550
		const num = Math.floor(Math.random() * (2550 - 0 + 1) + 0)
		password += objWord[num]
		if (i < 3) password += '-'
	}

	return password.toLowerCase()
}
