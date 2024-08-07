import React from 'react'

export const Icon = ({ state }) => (
	<img
		className={'fedmg-icon' + (state ? '-success' : '-default')}
		src='https://img.icons8.com/material-rounded/24/000000/copy.png'
	/>
)
