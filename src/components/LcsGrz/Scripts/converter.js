export default function convertToLevel(entropy) {
	if (entropy <= 42) return { level: 1, label: 'Very bad' }
	if (entropy <= 60) return { level: 2, label: 'Bad' }
	if (entropy <= 80) return { level: 3, label: 'Bad' }
	if (entropy <= 100) return { level: 4, label: 'Aceptable' }
	if (entropy <= 128) return { level: 5, label: 'Good' }
	if (entropy <= 180) return { level: 6, label: 'Good' }
	if (entropy <= 200) return { level: 7, label: 'Very good' }
	if (entropy <= 300) return { level: 8, label: 'Strong' }
	if (entropy <= 400) return { level: 9, label: 'Very stronger' }
	return { level: 10, label: 'Very stronger' }
}
