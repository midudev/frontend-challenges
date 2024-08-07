import { useState } from 'react'

const useLocalStorage = (prop, defaultValue) => {
	const [state, setState] = useState(() => {
		const localState = JSON.parse(localStorage.getItem('preferencies-password-generator') || '{}')
		return localState[prop] == null ? defaultValue : localState[prop]
	})

	return [state, setState]
}

export default useLocalStorage
