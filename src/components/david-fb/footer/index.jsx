import React from 'react'
import { SOCIAL_MEDIA } from '../constants'
import './style.css'

export default function Footer() {
	return (
		<footer className='david-fb__footer'>
			<a href='https://www.davidbasto.dev/' rel='noreferrer noopener' target='_blank'>
				David Basto
			</a>
			<ul>
				{SOCIAL_MEDIA.map((item) => (
					<li key={item.id}>
						<a href={item.url} title={item.title} rel='noreferrer noopener' target='_blank'>
							<item.icon />
						</a>
					</li>
				))}
			</ul>
		</footer>
	)
}
