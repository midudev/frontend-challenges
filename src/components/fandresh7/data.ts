import { Level } from './interfaces'

export const levels: Level[] = [
	{
		max: 8,
		width: 'w-4/12',
		name: 'Weak',
		color: 'bg-red-500',
		image:
			'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b121e6b04e7049ef878001a2caeb46db/default/dark/1.0'
	},
	{
		max: 13,
		name: 'Normal',
		width: 'w-8/12',
		color: 'bg-yellow-500',
		image:
			'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f9df6ee19e3240d7b33e91f4abf7167e/default/dark/1.0'
	},
	{
		max: 20,
		name: 'Strong',
		width: 'w-11/12',
		color: 'bg-green-500',
		image:
			'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_061a352b4eac468eb42a6f6be02f1001/default/dark/1.0'
	}
]
