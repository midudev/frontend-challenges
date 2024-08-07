import { useState, useEffect } from 'react'
const useEffectAudio = () => {
	const [rainAud, setRainAud] = useState(null)
	const [dayAud, setDayAud] = useState(null)
	const [nightAud, setNightAud] = useState(null)
	const [isSound, SetSound] = useState(true)
	useEffect(() => {
		const aud = new Audio('/carlos-carsdfj/meadow.mp3')
		aud.loop = true
		aud.volume = 0.3
		setDayAud(aud)
		const audNight = new Audio('/carlos-carsdfj/night.mp3')
		audNight.loop = true

		audNight.volume = 0.1
		setNightAud(audNight)
		const rainAudi = new Audio('/carlos-carsdfj/rain.mp3')
		rainAudi.loop = true
		setRainAud(rainAudi)
	}, [])
	const mutedToggle = () => {
		rainAud.muted = isSound
		dayAud.muted = isSound
		nightAud.muted = isSound
		SetSound((prev) => !prev)
	}
	return {
		rainAud,
		dayAud,
		nightAud,
		isSound,
		mutedToggle
	}
}

export default useEffectAudio
