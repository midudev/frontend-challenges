import getIndex from './getIndex.js'

function generateSelector(context) {
	let pathSelector

	if (context == 'null') throw new Error('not an dom reference') // eslint-disable-line eqeqeq
	// call getIndex function
	const index = getIndex(context)

	while (context.tagName) {
		// selector path
		pathSelector = context.localName + (pathSelector ? '>' + pathSelector : '')
		context = context.parentNode
	}
	// selector path for nth of type
	pathSelector = pathSelector + `:nth-of-type(${index})`
	return pathSelector
}

export default generateSelector
