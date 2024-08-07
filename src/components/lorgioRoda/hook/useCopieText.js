let password = ''

export const useCopieText = async (text) => {
	if (text.length > 0 && text !== password) {
		password = text
		await navigator.clipboard.writeText(text)
		alert('Text copied')
	}
}