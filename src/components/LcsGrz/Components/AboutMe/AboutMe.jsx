// @vendors
import React from 'react'
// @components
import Divider from '../Divider/Divider'
// @media
import Email from './Media/Email'
import Linkedin from './Media/Linkedin'
import Github from './Media/Github'
import Instagram from './Media/Instagram'
// @styles
import './AboutMe.css'

// ─────────────── ∞ ───────────────

const iconColor = '#7b32d9'
const iconSize = 30
const dividerWidth = 26

// ─────────────── ∞ ───────────────

export default function AboutMe() {
	const openInNewTab = (url) => () => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	const sendEmail = () => {
		navigator.clipboard.writeText('lucas.gerez@gmail.com')
		window.open('mailto:lucas.gerez@gmail.com')
	}

	return (
		<div className='lcsgrz-am-container'>
			<Email size={iconSize} color={iconColor} onClick={sendEmail} />
			<Divider width={dividerWidth} />
			<Linkedin
				size={iconSize}
				color={iconColor}
				onClick={openInNewTab('https://www.linkedin.com/in/lcsgrz/')}
			/>
			<Divider width={dividerWidth} />
			<label className='lcsgrz-am-label'>LCSGRZ</label>
			<Divider width={dividerWidth} />
			<Github
				size={iconSize}
				color={iconColor}
				onClick={openInNewTab('https://github.com/LcsGrz')}
			/>
			<Divider width={dividerWidth} />
			<Instagram
				size={iconSize}
				color={iconColor}
				onClick={openInNewTab('https://www.instagram.com/lcs.grz/')}
			/>
		</div>
	)
}
