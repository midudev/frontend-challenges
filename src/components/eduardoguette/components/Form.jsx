import { useContext, useEffect } from 'react'
import { AppContext } from '../context'
import { useForm } from '../hooks/useForm'
import { getPass } from '../services/getPass'
import { BtnHacktober } from './BtnHacktober'
import { HeaderMenu } from './HeaderMenu'
import { InputCheckbox } from './InputCheckbox'

export const Form = () => {
	const { state, setState } = useContext(AppContext)
	const { password } = state
	const [passValues, handleInputChanges] = useForm({
		lengthPass: 8,
		maxLength: 25,
		uppercase: true,
		lowercase: true,
		numbers: true,
		symbols: false
	})
	const { lengthPass, maxLength, uppercase, lowercase, numbers, symbols } = passValues

	useEffect(() => {
		if (password === '') {
			const password = getPass(passValues)
			setState((p) => ({
				...p,
				password
			}))
		}
	}, [password])

	const handleClickNewPass = () => {
		const password = getPass(passValues)
		setState((p) => ({
			...p,
			password
		}))
	}

	const handleLengthPass = (e) => {
		e.target.checked = passValues[e.target.name]
		handleInputChanges(e)
	}

	const handleColor = () =>
		lengthPass <= 6 ? '-red-400' : lengthPass > 6 && lengthPass < 14 ? '-orange-400' : '-green-400'

	return (
		<section className='text-white font-mono w-[min(470px,100%)] mx-auto'>
			<label htmlFor='pass' className='block w-full relative text-white mb-8'>
				<div className='px-6 w-full font-mono py-4 rounded focus:outline-none text-lg md:text-2xl h-[64px] bg-[rgb(36,35,44)] text-[#8e7f9f] input_eduardoguette'>
					{password}
				</div>
				<div
					className={`bg${handleColor()} h-1 w-full absolute -bottom-0 z-10 rounded-bl rounded-br`}
				></div>
				<HeaderMenu />
			</label>
			<div className='px-6 py-8 bg-[rgb(36,35,44)] flex gap-4 flex-col'>
				<InputCheckbox
					labelText={'Include Uppercase Letters'}
					name='uppercase'
					value={uppercase}
					valuesForm={passValues}
				/>
				<InputCheckbox
					labelText={'Include Lowercase Letters'}
					name='lowercase'
					value={lowercase}
					valuesForm={passValues}
				/>
				<InputCheckbox
					labelText={'Include Numbers'}
					name='numbers'
					value={numbers}
					valuesForm={passValues}
				/>
				<InputCheckbox
					labelText={'Include Symbols'}
					name='symbols'
					value={symbols}
					valuesForm={passValues}
				/>

				<label htmlFor='long' className='block'>
					<div className='flex items-center justify-between mb-2'>
						<span className='text-sm md:text-base'>Password Length</span>
						<span className={`md:text-2xl rounded-md text${handleColor()} `}>{lengthPass}</span>
					</div>
					<input
						className='input_eduardoguette w-full h-1 appearance-none focus:outline-violet-500 '
						onChange={handleLengthPass}
						type='range'
						name='lengthPass'
						id='long'
						min={1}
						value={lengthPass}
						max={maxLength}
					/>
				</label>
				<div className='mt-4'>
					<BtnHacktober handleEnvent={handleClickNewPass} text={'GENERATE'} />
				</div>
			</div>
		</section>
	)
}
