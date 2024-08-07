import Slider from '../Slider'
import useGenerator from '../hooks/useGenerator'
import { useEffect } from 'react'
import './controls.css'

export default function Controls() {
	const { password, createPassword, copyToClipboard } = useGenerator()
	const handleClick = () => {
		createPassword()
	}

	const handleCopy = () => {
		copyToClipboard(password)
	}

	useEffect(() => {
		createPassword()
	}, [])
	return (
		<div className='flex flex-col mb-8'>
			<Slider />
			<div className='flex justify-around md:justify-center my-3'>
				<button
					className='rounded-full border border-green-400 shadow p-3 px-4 mx-2 shadow csharls-btn-generate text-center text-white'
					onClick={handleClick}
				>
					<img className='mx-auto' width={20} height={20} src='/csharls/gear.svg' />
					Generar
				</button>
				<button
					className='rounded-full border border-yellow-400 shadow p-3 px-5 ,x-2 shadow text-center text-white csharls-btn-copy'
					onClick={handleCopy}
				>
					<img className='mx-auto' width={20} height={20} src='/csharls/clipboard.svg' />
					Copiar
				</button>
			</div>
		</div>
	)
}
