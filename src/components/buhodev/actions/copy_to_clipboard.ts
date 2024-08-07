export function copyToClipboard(node: HTMLElement, { text = '' }) {
	const handleCopy = async () => {
		await navigator.clipboard.writeText(text).then(
			() => node.dispatchEvent(new CustomEvent('copied')),
			(e) => node.dispatchEvent(new CustomEvent('error', { detail: { error: e } }))
		)
	}

	node.addEventListener('click', handleCopy, true)

	return {
		update: (params) => {
			if (params.text !== undefined) text = params.text
		},
		destroy() {
			node.removeEventListener('click', handleCopy, true)
		}
	}
}
