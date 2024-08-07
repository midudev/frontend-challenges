import React from 'react'

const StrengthBar = ({ strength }) => {
	const { width, color } = {
		0: { width: '0%', color: 'rgb(220 38 38)' },
		1: { width: '20%', color: 'rgb(239 68 68)' },
		2: { width: '40%', color: 'rgb(251 146 60)' },
		3: { width: '60%', color: 'rgb(253 230 138)' },
		4: { width: '80%', color: 'rgb(217 249 157)' },
		5: { width: '100%', color: 'rgb(163 230 53)' }
	}[strength]

	return (
		<span style={{
			height: '10px',
			borderTop: '1px solid #e4e6e7',
			borderRadius: '0 0 6px 6px',
			display: 'inline-block',
			marginTop: 0,
			overflow: 'hidden',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%'
		}}>
			<span style={{
				transition: 'width 1s ease-in-out',
				width,
				backgroundColor: color,
				height: '10px',
				display: 'inline-block',
				position: 'absolute',
				fontSize: '8px',
				textAlign: 'center',
				color: 'black'
			}}></span>
		</span>
	)
}

export default StrengthBar
