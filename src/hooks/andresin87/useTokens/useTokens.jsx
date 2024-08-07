import { useState, useEffect, forwardRef } from 'react'
import { createPortal } from 'react-dom'

import { getTokens } from './settings.js'

const useTokens = (target, tokens, prefix = 'a87') => {
	const [isReady, setIsReady] = useState(false)
	useEffect(() => {
		setIsReady(true)
		return () => setIsReady(false)
	})
	const Tokens = forwardRef(({ id, className }, forwardedRef) => {
		return isReady
			? createPortal(
					<style
						type='text/css'
						id={id}
						className={className}
						ref={forwardedRef}
						dangerouslySetInnerHTML={{ __html: getTokens(target, tokens, prefix) }}
					/>,
					document.head
			  ) // eslint-disable-line no-mixed-spaces-and-tabs
			: null
	})
	Tokens.displayName = 'Tokens'
	return Tokens
}

export default useTokens
