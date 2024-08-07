import React, { useEffect, useState } from 'react'
import cls from '../helpers/classnames'
import copy from '../helpers/copy'
import Copied from '../components/Copied'
import css from '../styles/styles.module.css'

export default function useCopy(t) {
	const [isVisible, setVisible] = useState(false)
	const [fadeOut, setFadeOut] = useState(false)

	const onClick = (e) => {
		copy(e.target.value)
		setVisible(true)
	}

	useEffect(() => {
		const id = setTimeout(() => {
			setFadeOut(false)
			setVisible(false)
		}, 3000)

		const id2 = setTimeout(() => {
			setFadeOut(true)
		}, 2000)

		return () => {
			clearTimeout(id)
			clearTimeout(id2)
		}
	}, [isVisible])

	const _Copied = () => (
		<Copied
			text={t('passwordCopied')}
			isVisible={isVisible}
			className={cls({
				[css.fadeOut]: fadeOut
			})}
		/>
	)

	return { onClick, Copied: _Copied }
}
