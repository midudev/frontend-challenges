import { useCallback, useLayoutEffect, useState } from 'react'

import { useMountedState } from '../index.js'

/**
 * React hook for combine the state of a value prop and its default value
 **/
const useControlledState = (controlledValue, defaultValue) => {
	const [initialValue] = useState(controlledValue === undefined ? defaultValue : controlledValue)
	const [value, setValue] = useState(initialValue)
	const isMounted = useMountedState()
	useLayoutEffect(() => {
		if (isMounted()) {
			setValue(controlledValue)
		}
	}, [controlledValue, setValue, isMounted])
	const updater = useCallback(
		(value, forceFlag) => {
			if (controlledValue === undefined || forceFlag) {
				setValue(value)
			}
		},
		[controlledValue, setValue]
	)
	return [value, updater, controlledValue !== undefined, initialValue]
}

export default useControlledState
