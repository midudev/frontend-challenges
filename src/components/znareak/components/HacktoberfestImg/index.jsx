import React from 'react'
import img from '../../assets/hacktoberfest.svg'
import css from './hacktoberfest.module.css'

export default function HacktoberfestImg() {
	return (
		<a
			href='https://hacktoberfest-2022.vercel.app/'
			rel='noopener noreferrer'
			target='_blank'
			className={css.link}
		>
			<img src={img} className={css.img} />
		</a>
	)
}
