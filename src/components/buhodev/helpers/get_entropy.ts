// entropy.js MIT License © 2014 James Abney http://github.com/jabney
export function getEntropy(str) {
	const len = str.length

	// Build a frequency map from the string.
	const frequencies = Array.from(str).reduce(
		(freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq,
		{}
	)

	// Sum the frequency of each character.
	return Object.values(frequencies).reduce((sum, f) => sum - (f / len) * Math.log2(f / len), 0)
}
