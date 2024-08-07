export function highlight(string) {
	let highlighted = ''
	for (let i = 0; i < string.length; i++) {
		highlighted = string.replace(/([0-9])/g, '<span style="color: rgb(248 113 113)">$1</span>')
		highlighted = highlighted.replace(
			/([!@#$%^&*])/g,
			'<span style="color: rgb(96 165 250)">$1</span>'
		)
	}
	return highlighted
}
