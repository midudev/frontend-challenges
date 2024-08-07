import React, { useEffect, useRef } from 'react'
import catImage from '../assets/meow.png'

const Cat = ({ passwordValue, length }) => {
	const tongue = useRef()
	const rightEye = useRef()
	const leftEye = useRef()

	// Show password when generated
	useEffect(() => {
		if (!passwordValue) return

		tongue.current.style.transform = 'translateY(150px)'

		// Hide Generated password
		const interval = setInterval(() => {
			tongue.current.style.transform = 'translateY(0px)'
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [passwordValue])

	// Change eye color by password length
	useEffect(() => {
		if (length < 8) {
			leftEye.current.style.background =
				'linear-gradient(90deg, rgba(255,0,33,1) 0%, rgba(255,156,0,1) 100%)'
			rightEye.current.style.background =
				'linear-gradient(90deg, rgba(255,0,33,1) 0%, rgba(255,156,0,1) 100%)'
		} else if (length < 16) {
			leftEye.current.style.background =
				'linear-gradient(90deg, rgba(255,177,0,1) 0%, rgba(255,241,0,1) 100%)'
			rightEye.current.style.background =
				'linear-gradient(90deg, rgba(255,177,0,1) 0%, rgba(255,241,0,1) 100%)'
		} else if (length > 16) {
			leftEye.current.style.background =
				'linear-gradient(90deg, rgba(89,255,0,1) 0%, rgba(0,191,255,1) 100%)'
			rightEye.current.style.background =
				'linear-gradient(90deg, rgba(89,255,0,1) 0%, rgba(0,191,255,1) 100%)'
		}
	}, [length])

	return (
		<section className='relative mt-5 md:mt-7'>
			<img src={catImage.src} alt='dall-e cat slydragonn' className='z-20 relative w-[400px]' />
			<div
				ref={leftEye}
				className='z-30 top-[43%] sm:top-[140px] left-[27%] sm:left-[100px] absolute w-10 sm:w-14 h-10 sm:h-14 bg-orange-400 rounded-full transition-all duration-300'
			></div>
			<div
				ref={rightEye}
				className='z-30  top-[43%] sm:top-[140px] right-[27%] sm:right-[100px] absolute w-10 sm:w-14 h-10 sm:h-14 bg-orange-400 rounded-full transition-all duration-300'
			></div>
			<div
				ref={tongue}
				className='z-10 absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-end pb-3 text-center w-[110px] sm:w-[125px] h-[170px] sm:h-[200px] bg-gradient-to-b from-red-900 to-red-500 rounded-b-full transition-all duration-700 shadow-md shadow-red-500'
			>
				<span className='relative w-full bottom-7 text-white font-medium italic text-xs break-words'>
					{passwordValue}
				</span>
			</div>
		</section>
	)
}

export default Cat
