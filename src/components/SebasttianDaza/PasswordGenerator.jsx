import { useState, useCallback, useEffect } from 'react'
import { Container, Text } from './Styled-Components'
import { Title, Button } from './Components'
import { useCopyToClipboard } from './Hooks'

const PasswordGenerator = () => {
	const [isVolume, setIsVolume] = useState(1)
	const [isPassword, setIsPassword] = useState('')
	const [isCopied, setIsCopied, copyToClipboard] = useCopyToClipboard()

	const handleVolume = useCallback((e) => {
		setIsVolume(e.target.value)
	}, [])

	const generatePassword = useCallback(() => {
		setIsPassword(Math.random().toString(36).slice(-isVolume))
	}, [isVolume])

	useEffect(() => {
		if (isCopied) {
			setTimeout(() => {
				setIsCopied(false)
				setIsPassword('')
			}, 2000)
		}
	}, [isCopied])

	return (
		<>
			<Container>
				<Title
					title='Password Generator'
					className='text-white uppercase text-center font-sans text-2xl'
				/>
				<section className='bg-slate-900 h-48 w-96 flex flex-col items-center justify-evenly rounded drop-shadow-md'>
					<div className='bg-cyan-900 h-20 rounded py-2 px-2 flex  w-80 items-center justify-around'>
						<input
							type='text'
							className='rounded text-center text-white text-base'
							defaultValue={isCopied ? 'Copy' : isPassword}
							disabled={true}
						/>
						<Button
							text='COPY'
							className='text-white hover:bg-sky-700 text-base py-2 px-2 rounded font-sans'
							onClick={() => copyToClipboard(isPassword)}
						/>
					</div>
					<div className='flex w-80 justify-around'>
						<input
							type='range'
							min='1'
							max='10'
							className='in-range:boder-green-500 w-64'
							step='1'
							defaultValue={isVolume}
							onChange={handleVolume}
						/>
						<Text>{isVolume}</Text>
					</div>
				</section>
				<section>
					<Button
						text='GENERATE'
						className='bg-cyan-900 w-32 rounded drop-shadow-md py-2 text-white text-base font-sans'
						onClick={generatePassword}
					/>
				</section>
				<section>
					<Text>Developed by Sebastian Daza</Text>
				</section>
			</Container>
		</>
	)
}

export default PasswordGenerator
