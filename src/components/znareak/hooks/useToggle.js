import { useCallback, useState } from 'react'

const useToggle = (initialState = false) => {
	const [state, setState] = useState(initialState)
	const toggle = useCallback((flag) => {
		if (typeof flag === 'boolean') {
			setState(flag)
		} else {
			setState((state) => !state)
		}
	}, [])
	return [state, toggle]
}
export default useToggle
