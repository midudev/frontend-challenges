import { useState, useEffect } from 'react'
import usePassGenerate from './utils/usePassGenerate'
import { CopyIcon, OptionLogo, AudiIcon } from './SvgComponents'
import BackParallax from './BackParallax'
import useEffectAudio from './utils/useEffectAudio'
export default function App() {
	const [notification, setNotification] = useState(false)
	const [transparent, setTransparent] = useState(true)

	const { changeDigits, changeFormat, digits, format, passGenerated, namesKey, FORMAT_OPTIONS } =
		usePassGenerate()
	const { rainAud, dayAud, nightAud, mutedToggle, isSound } = useEffectAudio()
	const boxBg = transparent ? ' blur-3xl' : ' '
	const isStorm = !format[FORMAT_OPTIONS.NUMBER]
	const isRainy = !format[FORMAT_OPTIONS.SPECIAL_CHART]
	const opacity = format[FORMAT_OPTIONS.UPPER_CASE] ? 0 : 20
	const notifi = notification
		? ' -translate-y-11 block opacity-100 flex '
		: '   opacity-0  translate-y-5 '

	useEffect(() => {
		if (isRainy) {
			rainAud?.play()
		} else {
			rainAud?.pause()
		}
		if (digits < 13) {
			dayAud?.pause()
			nightAud?.play()
		}
		if (digits > 15) {
			nightAud?.pause()
			dayAud?.play()
		}
	}, [isRainy, digits])

	const handleRangeChange = (ev) => {
		const { value } = ev.target
		changeDigits(value)
	}
	const handleCheckChange = (ev) => {
		const { value } = ev.target
		changeFormat({ name: value, value: !format[value] })
	}
	const handleCopy = () => {
		setNotification(true)
		navigator.clipboard.writeText(passGenerated)
		setTimeout(() => {
			setNotification(false)
		}, 600)
	}

	return (
		<BackParallax storm={isStorm} opacity={opacity} rainy={isRainy} sun={Number(digits) - 8}>
			<main
				className={
					' min-h-screen  flex justify-center z-50 relative p-6 items-center bg-transparent '
				}
			>
				<div className=' w-full sm:w-4/12 p-6 bg-transparent relative  rounded-sm text-center border-surf border '>
					<div className={'absolute w-full h-full bg-surf  top-0 left-0 ' + boxBg}></div>
					<button
						className='absolute top-0 left-0 hover:bg-blue-800/25 font-extrabold text-gray-900  rounded-lg text-sm p-1 text-center inline-flex items-center '
						type='button'
						title='background color'
						onClick={() => {
							setTransparent((prev) => !prev)
						}}
					>
						<OptionLogo height='20px' />
					</button>
					<button
						className='absolute top-0 right-0 hover:bg-blue-800/25 font-extrabold text-gray-900  rounded-lg text-sm p-1 text-center inline-flex items-center '
						type='button'
						title='sound mute/ unmute'
						onClick={() => {
							mutedToggle()
						}}
					>
						<AudiIcon height='20px' bgfill={isSound ? '#000000' : 'transparent'} />{' '}
					</button>
					<form className='relative z-50'>
						<span
							className={
								'absolute w-[100px] h-11 -top-12 text-center bg-white/70 border z-[60] border-solid  justify-center items-center border-black rounded-lg right-0 transition-transform duration-500  ' +
								notifi
							}
						>
							<p className='text-sm font-bold  '>COPIED</p>
						</span>

						<h1 className='font-special font-bold text-lg  mb-2'> PASSWORD AUTO GENERATOR </h1>
						<span className='w-full flex justify-center items-center font-bold focus:outline-none ring ring-blue-300 bg-white h-7 p-2  rounded-sm  '>
							<p
								title='key length'
								className='bg-blue-800/25  border border-dashed border-blue-400 w-10 font-medium rounded-lg text-sm px-1 text-center     '
							>
								{digits}
							</p>
							<input
								className='w-full text-center  outline-none border-none  '
								aria-label='generated key'
								value={passGenerated}
								readOnly={true}
							/>
							<button
								type='button'
								title='Copy auto generated key'
								className=' hover:bg-blue-800/25 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center inline-flex items-center  '
								onClick={handleCopy}
							>
								<CopyIcon height='20px' />
							</button>
						</span>
						<ul className='items-center w-full text-sm font-medium text-gray-900    sm:flex   dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
							{namesKey.map((key) => (
								<li className='w-full  ' key={key}>
									<div className='flex items-center pl-3'>
										<input
											id={key}
											aria-label='format option'
											type='checkbox'
											value={key}
											checked={format[key]}
											onChange={handleCheckChange}
											className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
										/>
										<label
											htmlFor={key}
											className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
										>
											{key}
										</label>
									</div>
								</li>
							))}
						</ul>
						<input
							className='w-full cursor-pointer'
							aria-label='key length option'
							type='range'
							value={digits}
							min={8}
							max={20}
							onChange={handleRangeChange}
						/>
					</form>
				</div>
			</main>
		</BackParallax>
	)
}
