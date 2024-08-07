import React from 'react'
import css from './container.module.css'

function Container({ children, ...props }) {
	return (
		<div className={css.container} {...props}>
			{children}
		</div>
	)
}

function Main({ children, ...props }) {
	return <main {...props}>{children}</main>
}

Container.Main = Main

export default Container
