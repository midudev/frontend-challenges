import { LARGE_WORDLIST } from '@components/buhodev/helpers/eff_large_wordlist'
import { SHORT_WORDLIST } from '@components/buhodev/helpers/eff_short_wordlist'
import { generateDiceware } from '@components/buhodev/helpers/generate_diceware'

export interface PassphraseOptions {
	wordsCount: number
	wordList: 'short' | 'large'
	separator: '-' | '_' | '.' | ',' | ' ' | '/'
}

export function generatePassphrase(options: PassphraseOptions, seed: string) {
	const { wordsCount, wordList, separator } = options

	let selectedWordList: Record<string, string>
	let dicewareType: 4 | 5
	const selectedWords = []

	if (wordList === 'large') {
		selectedWordList = LARGE_WORDLIST
		dicewareType = 5
	} else {
		selectedWordList = SHORT_WORDLIST
		dicewareType = 4
	}

	// this is another way to do the above
	// const selectedWordList = wordList === 'large' ? LARGE_WORDLIST : SHORT_WORDLIST
	// const dicewareType = wordList === 'large' ? 5 : 4

	for (let i = 0; i < wordsCount; i++) {
		selectedWords.push(selectedWordList[generateDiceware(dicewareType)])
	}

	const passphrase = selectedWords.join(separator)

	return passphrase
}
