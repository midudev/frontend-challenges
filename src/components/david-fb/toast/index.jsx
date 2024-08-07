import React, { useRef, useEffect } from 'react'
import CloseButton from '../icons/CloseIcon'
import './style.css'

export default function Toast({ type, message, time, closeAlert }) {
	const progressRef = useRef()
	const toastRef = useRef()

	useEffect(() => {
		progressRef.current.style.animationDuration = `${time}s`

		const timerAddAnimationClose = setTimeout(() => {
			toastRef.current.classList.add('david-fb_on-close')
		}, (time - 0.3) * 1000)

		const timerClose = setTimeout(() => {
			closeAlert()
		}, time * 1000)

		return () => {
			clearTimeout(timerClose)
			clearTimeout(timerAddAnimationClose)
		}
	}, [progressRef, time])

	return (
		<div ref={toastRef} className='david-fb__toast'>
			<section>
				<p>{message}</p>
				<button onClick={closeAlert}>
					<CloseButton />
				</button>
			</section>
			<div ref={progressRef}></div>
		</div>
	)
}
