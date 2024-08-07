import { generateSelector } from '../../../components/andresin87/utils/index.js'

export const getTokens = (targetElement, tokens = {}, prefix = '') => {
	const selector = generateSelector(targetElement)
	const tokenize = Object.entries(tokens)
		.map(([tokenKey, tokenValue]) => `--${`${prefix && `${prefix}-`}`}${tokenKey}:${tokenValue}`)
		.join(';')
	const response = `${selector}{${tokenize};}`
	return response
}
