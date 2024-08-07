import { useState } from 'react'
import { Toast } from './components/Toast'
import { Checkbox } from './components/Checkbox'
import { Slider } from './components/Slider'
import { PasswordGenerator } from './components/Generator'
import { IconOutline } from './components/Icons'
import { Allowed } from './utils/GeneratePassword'


const CharactersPools = Object.keys(Allowed)
const NotCommonPools = ['Non-ASCII', 'Brackets', 'Space', 'Dashes']
export const App = () => {
	const initialPools = CharactersPools.filter((pool) => !NotCommonPools.includes(pool))
	const [showToast, setShowToast] = useState(false)
	const [passwordLength, setPasswordLength] = useState(8)
	const [includedCharacters, setIncludedCharacters] = useState(initialPools)

	function handlePasswordCopy () {
		setShowToast(true)
		setTimeout(() => {
			setShowToast(false)
		}, 3000)
	}

	function handleToastClose () {
		setShowToast(false)
	}

	function handleCheckboxChange (linkedValue: string, checked: boolean) {
		if (checked) {
			setIncludedCharacters([...includedCharacters, linkedValue])
		} else {
			setIncludedCharacters(includedCharacters.filter((value) => value !== linkedValue))
		}
	}

	function handleSliderChange (value: number) {
		setPasswordLength(value)
	}

	return (
		<main className='relative flex flex-col items-center gap-10 pt-10 h-screen text-white font-sans'>
			{
				showToast && (
					<Toast
						message='Password copied to clipboard!'
						icon={
							<IconOutline>
								<IconOutline.CheckMark />
							</IconOutline>
						}
						onClose={ handleToastClose }
					/>
				)
			}
			<h1 className='mb-3 text-sky-400 text-5xl font-bold'>Password Generator</h1>
			<PasswordGenerator length={ passwordLength } includedCharacters={ includedCharacters } onCopy={ handlePasswordCopy } />
			<div className='flex flex-col items-center gap-10 w-11/12 max-w-lg'>
				<Slider min={ 8 } max={ 64 } onChange={ handleSliderChange } />
				<div className='grid grid-cols-2 gap-2'>
					{
						CharactersPools.map((pool) => (
							<Checkbox
								key={ pool }
								text={ `Include ${pool.toLocaleLowerCase()}` }
								initialCheck={ !NotCommonPools.includes(pool) }
								linkedValue={ pool }
								onChange={ handleCheckboxChange }
							/>
						))
					}
				</div>
			</div>
		</main>
	)
}
