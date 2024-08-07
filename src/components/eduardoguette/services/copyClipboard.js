async function copyClipboard(value) {
	await navigator.clipboard.writeText(value)
	return await navigator.clipboard.readText()
}
export default copyClipboard
