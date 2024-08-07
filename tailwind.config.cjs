/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				tilt: 'tilt 10s infinite linear'
			},
			keyframes: {
				tilt: {
					'0%, 50%, 100%': {
						transform: 'rotate(0deg)'
					},
					'25%': {
						transform: 'rotate(2deg)'
					},
					'75%': {
						transform: 'rotate(-2deg)'
					}
				}
			},
			colors: {
				spark: '#ffe27d',
				surf: '#64e2ff',
				psybeam: '#9092ff',
				giga: '#b4ff39',
				manga: '#e5e1e6',
				body: '#170F1E',
				'black-currant': '#0E0318',
				'pastel-green': '#7ae582',
				'red-orange': '#ff331f',
				'terra-cota': '#ed6a5a'
			}
		},
		fontFamily: {
			mono: [
				'ui-monospace',
				'SFMono-Regular',
				'Menlo',
				'Monaco',
				'Consolas',
				'Liberation Mono',
				'Courier New',
				'monospace'
			],
			sans: ['Jet Brains Mono', 'monospace'],
			special: ['Orbitron', 'sans-serif']
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
