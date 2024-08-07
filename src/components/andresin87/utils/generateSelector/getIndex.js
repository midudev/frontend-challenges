// get index for nth of type element
function getIndex(node) {
	let i = 1
	const tagName = node.tagName

	while (node.previousSibling) {
		node = node.previousSibling
		// eslint-disable-next-line eqeqeq
		if (node.nodeType === 1 && tagName.toLowerCase() == node.tagName.toLowerCase()) {
			i++
		}
	}
	return i
}

export default getIndex
