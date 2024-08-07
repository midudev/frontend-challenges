// @vendors
import React from 'react'
// @styles
import './Media.css'

// ─────────────── ∞ ───────────────

export default ({ onClick, size, color }) => (
	<svg
		className='lcsgrz-ab-media'
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 50 50'
		width={size}
		height={size}
		onClick={onClick}
		fill={color}
	>
		<path d='M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z' />
	</svg>
)
