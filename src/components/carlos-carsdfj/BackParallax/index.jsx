import { useEffect, useState } from 'react'
import styles from './BackParallax.module.css'
import useResize from '../utils/useResize'
import { LeftCloud, Sun, RightCloud, Field, FlowerHappy, Lightning, Storm } from '../SvgComponents'
const BackParallax = ({ children, sun = 0, rainy = false, opacity = 0, storm = false }) => {
	const { width } = useResize()
	const [isLightning, setLightning] = useState(false)
	useEffect(() => {
		if (storm) {
			const interval = setInterval(() => {
				setLightning((prev) => !prev)
			}, 4000)
			return () => clearInterval(interval)
		}
		setLightning(false)
	}, [storm])
	const flowerAmount = Math.floor(width / 160)
	const flowersSize = '0'
		.repeat(flowerAmount)
		.split('')
		.map((n, i) => ({
			tspacing: i * 160 + 20,
			bSpacing: (i / 2) % 2 === 0 ? 30 : 10
		}))
	const sunMotion = [
		'translate-y-[160%]',
		'translate-y-[120%]',
		'translate-y-[90%]',
		'translate-y-[81%]',
		'translate-y-[72%]',
		'translate-y-[63%]',
		'translate-y-[54%]',
		'translate-y-[45%]',
		'translate-y-[36%]',
		'translate-y-[27%]',
		'translate-y-[18%]',
		'translate-y-[9%]',
		'translate-y-0'
	]
	const rain = rainy ? styles.rain : ''
	const back = sun > 10 ? 'bg-blue-300' : 'bg-black-300'
	const translateXplus = sun > 10 ? 'translate-x-[0px]' : ' translate-x-[1000px] '
	const translateXless = sun > 10 ? 'translate-x-[0px]' : ' translate-x-[-1000px] '
	const translateYplus = storm ? 'translate-y-[0px]' : 'translate-y-[-800px]'
	const translateYSun = storm ? 'translate-y-[-200px]' : 'translate-y-[0px]'
	const stormEffect = isLightning ? ' opacity-100  ' : 'opacity-0'
	const isDay = sun > 10
	const isNigth = sun < 4
	let step = 'tired'
	let opacityBg = 'opacity-30'
	if (isDay) {
		opacityBg = 'opacity-' + opacity
		step = 'happy'
	}
	if (isNigth) {
		opacityBg = 'opacity-80'
		step = 'sick'
	}

	return (
		<div
			className={
				'  overflow-hidden h-screen w-full relative transition-all bg-gradient-to-t to-black/40 from-blue-900/70  ' +
				back
			}
		>
			<div
				className={
					'absolute w-full h-screen top-0 left-0  transition-all ease-linear duration-1000  z-50 ' +
					rain
				}
			></div>
			<div
				className={
					'absolute w-full h-screen top-0 left-0  transition-opacity ease-linear duration-1000 bg-black z-50 ' +
					opacityBg
				}
			></div>
			<div className='absolute w-full h-screen top-0 left-0 '>
				<Storm
					className={
						'duration-[1.5s] min-w-full z-30 ease-linear transition-all absolute -top-1 sm:-top-11 -left-7 ' +
						translateYplus
					}
				/>
				<Lightning
					className={
						'transition-opacity  delay-[3.5s]  ease-in-out duration-200 min-h-screen absolute top-0 left-0 ' +
						stormEffect
					}
				/>
				{flowersSize.map((flower) => {
					const duration = (Math.random() * 4).toString() + 's'
					return (
						<FlowerHappy
							key={flower.tspacing}
							step={step}
							duration={duration}
							width='160px'
							style={{
								left: flower.tspacing + 'px',
								bottom: flower.bSpacing + 'px'
							}}
							className={'z-40 absolute transition-all delay-300   '}
						/>
					)
				})}

				<Field className='z-30  min-w-full sm:h-[200px]  lg:h-auto h-[150px]  absolute -bottom-8   -left-3 -right-3' />
			</div>
			{children}
			<div
				className={
					'absolute transition-transform top-0 duration-[1s]  ease-linear z-10  bg-[url("/carlos-carsdfj/ligth.png")]  bg-cover flex justify-center  items-start	p-5  h-full w-full left-0' +
					` ${sunMotion[sun]}`
				}
			>
				<LeftCloud
					className={'duration-[1.5s] z-[31]  delay-75 ease-in transition-all ' + translateXless}
					width='300px '
				/>
				<div
					className={
						'relative w-1/3 justify-center flex duration-[1.5s]   ease-in transition-all ' +
						translateYSun
					}
				>
					<span className='animate-ping bg-yellow-100   h-[200px] w-[200px]  rounded-full absolute inline-flex z-10 ' />
					<Sun className=' z-30  absolute inline-flex      ' width='200px ' />
				</div>
				<RightCloud
					className={'duration-[1.5s]  z-30 ease-linear transition-all ' + translateXplus}
					width='300px '
				/>
			</div>
		</div>
	)
}

export default BackParallax
