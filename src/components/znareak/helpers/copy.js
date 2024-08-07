export default function copy(text) {
	navigator.clipboard.writeText(text)
	return text
}
