import { useEffect, useState } from 'react'
import { useControlledState, useTokens } from '../../../../hooks/andresin87/index.js'

import modeDark from './mode-dark.json'
import modeLight from './mode-light.json'

const useMode = ({ target, value, defaultValue = 'dark' }) => {
	const [mode] = useControlledState(value, defaultValue)
	const [tokens, setTokens] = useState(mode === 'light' ? modeLight : modeDark)
	const Tokens = useTokens(target, tokens)

	useEffect(() => {
		target && !target.classList.contains('mode') && target.classList.add('mode', `mode-${mode}`)
		return () => {
			target && target.classList.contains('mode') && target.classList.remove('mode', `mode-${mode}`)
		}
	}, [target])
	useEffect(() => {
		setTokens(mode === 'light' ? modeLight : modeDark)
	}, [mode])

	return Object.assign([], { Tokens })
}

export default useMode
