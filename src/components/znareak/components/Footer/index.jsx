import React from 'react'
import css from './footer.module.css'

export default function Footer() {
	return (
		<footer className={css.footer}>
			<a href='https://www.twitch.tv/midudev' rel='noopener noreferrer' target='_blank'>
				midudev
			</a>
			<a href='https://libardo.vercel.app/' rel='noopener noreferrer' target='_blank'>
				znareak
			</a>
			<a href='https://hacktoberfest.com/' rel='noopener noreferrer' target='_blank'>
				hacktoberfest
			</a>
			<a
				href='https://github.com/midudev/password-generator'
				rel='noopener noreferrer'
				target='_blank'
			>
				github
			</a>
		</footer>
	)
}
