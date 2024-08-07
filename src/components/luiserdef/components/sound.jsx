import { useState, useEffect, useRef } from 'react'
import soundOn from '../assets/images/volume.svg'
import soundOf from '../assets/images/mute.svg'

function Sound({ passwordStrengthData, passwordGeneratedToggle }) {
	const [isSoundActive, setIsSoundActive] = useState(false)
	const soundBT = isSoundActive ? 'bg-[#5d8899]' : 'bg-[#995d5db0]'
	const soundImg = isSoundActive ? soundOn : soundOf
	const audioRef = useRef()
	const audiosrcRef = useRef()

	function handleSound() {
		setIsSoundActive((lastValue) => !lastValue)
	}

	useEffect(() => {
		if (isSoundActive) {
			audioRef.current.load()
			audioRef.current.play()
		} else {
			audioRef.current.pause()
			audioRef.current.currentTime = 0
		}
	}, [isSoundActive])
	useEffect(() => {
		if (isSoundActive) {
			audioRef.current.pause()
			audioRef.current.load()
			audioRef.current.play()
		}
	}, [passwordGeneratedToggle])
	return (
		<div
			onClick={handleSound}
			style={{ backgroundImage: `url('${soundImg}')` }}
			className={`${soundBT} luiserdef-bt-sound bg-no-repeat bg-center bg-[length:25px] cursor-pointer absolute rounded-full h-10 w-10 top-10 right-[-20px]`}
		>
			<audio ref={audioRef}>
				<source ref={audiosrcRef} src={passwordStrengthData.sound} />
			</audio>
		</div>
	)
}
export default Sound
