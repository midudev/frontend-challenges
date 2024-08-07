import React from 'react'
import { Button, Cat, FormLayout, Slider, CopyButton, Banner, CheckBox } from './components'
import useGenerator, { useTemporal } from './hooks'
import './styles/App.css'

const App = () => {
	const [password, generatePassword, Config] = useGenerator()
	const [show, showInfo, message] = useTemporal(3000)

	return (
		<section className='flex justify-center items-center'>
			<Banner show={show} message={message} />
			<section
				id='app-slydragonn'
				className='relative flex flex-col items-center w-full min-h-[100vh] p-5 overflow-hidden'
			>
				<h1 className='text-white text-2xl sm:text-4xl font-thin uppercase underline italic'>
					Meow Generator &#9752;
				</h1>
				<Cat passwordValue={password} length={Config.length} />
				<FormLayout>
					<Slider handleChange={Config.setLength} />
					<div className='flex flex-wrap w-full justify-around mb-3'>
						<CheckBox
							label='Uppercases'
							handleClick={Config.setChars}
							chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
						/>
						<CheckBox label='Numbers' handleClick={Config.setChars} chars='1234567890' />
						<CheckBox label='Symbols' handleClick={Config.setChars} chars='*+-ñÑ/&%$#!¡¿?' />
					</div>
					<div className='flex items-center'>
						<Button handleClick={generatePassword} message='Generate作成する' />
						<CopyButton value={password} setMessage={showInfo} />
					</div>
				</FormLayout>
				<h2 className='z-0 absolute left-10 hidden sm:block w-1 text-white text-2xl sm:text-5xl select-none transition-all duration-300'>
					猫がパスワードを作る
				</h2>
				<h2 className='z-0 absolute right-10 hidden md:block w-44 text-white font-thin text-3xl uppercase break-words italic text-end select-none'>
					cat password generator
				</h2>
				<span className='absolute bottom-2 right-2 text-white font-thin text-xs md:text-sm'>
					Made with &#10084; by{' '}
					<a href='https://github.com/slydragonn' target='_blank'>
						slydragonn
					</a>
				</span>
			</section>
		</section>
	)
}

export default App
