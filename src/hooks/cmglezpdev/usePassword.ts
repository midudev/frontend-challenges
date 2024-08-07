import { useState } from 'react'

const letters = 'ajkbidmnocdefghlpqrsvyztwxu'
const numbers = '8056219437'
const special = '&*#$%+!@=^</'

export interface ISettings {
	length: number;
	letters?: boolean;
	numbers?: boolean;
	special?: boolean;
	divide?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const randomSort = (array:any) => {
	array.sort(() => 0.5 - Math.random())
	array.sort(() => 0.5 - Math.random())
	array.sort(() => 0.5 - Math.random())
	array.sort(() => 0.5 - Math.random())
	array.sort(() => 0.5 - Math.random())

	return array
}

const toArray = (text:string) => {
	const r:string[] = []
	for (let i = 0; i < text.length; i++) r.push(text[i])
	return r
}

const splitString = (text:string, div:number):string[] => {
	const split:string[] = []

	for (let i = 0; i < text.length; i += div) {
		split.push(
			i + div <= text.length
				? text.substring(i, i + div)
				: text.substring(i)
		)
	}

	return split
}

const spaceString = (text:string, div) :string => {
	const splited = splitString(text, div)
	let finalpassw = ''
	for (let i = 0; i < splited.length; i++) { finalpassw += splited[i] + ' ' }
	finalpassw = finalpassw.substring(0, finalpassw.length - 1)
	return finalpassw
}

const isLowLetter = (letter:string):boolean => {
	return 'a'.charCodeAt(0) <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 'z'.charCodeAt(0)
}


export const usePassword = () => {
	const [password, setPassword] = useState<string>('')

	const generatePassword = (settings:ISettings, length: number) => {
		let repo = ''
		if (settings.letters) repo += letters
		if (settings.numbers) repo += numbers
		if (settings.special) repo += special

		// merge the characters
		const r = randomSort(toArray(repo))

		let genPass = ''
		for (let i = 0; i < length; i++) {
			const n = Math.floor(Math.random() * 10000 % r.length)

			const char = (isLowLetter(r[n]) && Math.random() >= 0.55)
				? (r[n] as string).toUpperCase()
				: r[n]
			genPass += char
		}

		if (settings.divide) {
			// div the password
			const div = (length % 4 !== 3 && length % 4 !== 0) ? 3 : 4
			const password = spaceString(genPass, div)
			setPassword(password)
			return
		}

		setPassword(genPass)
		return genPass
	}

	const generatePasswordByPhrase = (phrase:string, length:number) => {
		if (phrase.length === 0) return

		// extend the phrase
		while (phrase.length < length) {
			phrase += phrase
		}

		// take the string of the end
		const init = phrase.length - length
		phrase = phrase.substring(init)

		// create a hashes
		const BASE = 73 // prime number
		const MOD = 95471 // prime number
		const hashs = []
		for (let i = 0; i < phrase.length; i++) {
			if (i === 0) {
				hashs.push(phrase[i].charCodeAt(0) % MOD)
				continue
			}
			hashs.push((hashs[i - 1] * BASE + phrase[i].charCodeAt(0)) % MOD)
		}

		// assign characters
		let passw = ''
		for (let i = 0; i < hashs.length; i++) {
			const rand = hashs[i] % 2
			let char = ''
			if (rand === 0) char = numbers[hashs[i] % numbers.length]
			if (rand === 1) char = letters[hashs[i] % letters.length]
			passw += char
		}

		// put some special characters
		const nrand = Math.max(hashs[0] % 5, 3)
		for (let i = nrand; i < hashs.length; i += nrand) {
			const index = hashs[passw[i].charCodeAt(0) % hashs.length]
			passw = passw.substring(0, i) + special[index % special.length] + passw.substring(i + 1)
		}

		// div the password
		const div = (length % 4 !== 3 && length % 4 !== 0) ? 4 : 3
		const password = spaceString(passw, div)

		setPassword(password)
		return password
	}

	const countCharacteres = (text: string, dictionary:string[]): number => {
		let count = 0
		for (let i = 0; i < text.length; i++) {
			if (!dictionary.find((ch) => text[i] === ch)) continue
			count++
		}
		return count
	}

	const passwordStrength = (password: string) => {
		// Initial Percentage
		let percentage = 0

		// Special Characters
		let c = countCharacteres(password, toArray(special))
		if (c !== 0) percentage += (c >= password.length / 4) ? 20 : 15

		// Letters
		c = countCharacteres(password, toArray(letters))
		if (c !== 0) percentage += (c >= password.length / 4) ? 30 : 20

		// Numbers
		c = countCharacteres(password, toArray(numbers))
		if (c !== 0) percentage += (c >= password.length / 4) ? 20 : 15

		// Numbers
		c = countCharacteres(password, [' '])
		if (c !== 0) percentage += (c >= password.length / 4) ? 10 : 5


		// Length
		if (password.length < 8) percentage -= 10
		else
		if (password.length < 10) percentage += 15
		else
		if (password.length < 15) percentage += 25
		else
		if (password.length < 20) percentage += 35
		else
		if (password.length < 30) percentage += 65
		else percentage += 80

		return Math.min(100, percentage)
	}


	return {
		password,
		generatePassword,
		generatePasswordByPhrase,
		passwordStrength
	}
}