export default function classnames(...classes) {
	// oh yeah, if i can't use classname package then i'll make it

	const filterActiveClasses = (classObj) => {
		const _clasess = Object.entries(classObj)
			// delete undefined classes or falsy classes status
			.filter(([key, value]) => Boolean(value) && Boolean(key))
			.map(([key]) => key)
		return _clasess
	}
	const classNames = classes.filter(Boolean).reduce((prev, current) => {
		if (typeof current === 'object') {
			return [...prev, ...filterActiveClasses(current)]
		}
		return [...prev, current]
	}, [])

	return classNames.join(' ')
}
