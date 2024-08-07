import { highlight } from '@components/buhodev/helpers/highlight'

export function flipboard(node, params) {
	const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
	const text = node.innerText.trim()

	let lastTime = 0
	return {
		duration: 1000,
		...params,
		tick(t) {
			const time = Date.now()
			if (time - lastTime < 32) return
			lastTime = time

			let str = ''
			for (let i = 0; i < text.length; i++) {
				const progress = i / text.length
				if (text[i] === ' ' || progress < t * 0.9) {
					str += highlight(text[i])
				} else if (progress < t * 1.5) {
					str += highlight(randomChars[Math.floor(Math.random() * randomChars.length)])
				} else if (progress < t * 2) {
					str += '-'
				}
			}
			node.innerHTML = str
		}
	}
}
