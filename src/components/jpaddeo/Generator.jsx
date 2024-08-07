import GeneratorOptions from '@components/jpaddeo/GeneratorOptions.jsx'
import PasswordCard from '@components/jpaddeo/partials/PasswordCard.jsx'
import Actions from '@components/jpaddeo/partials/Actions.jsx'

import {
	PasswordGeneratorContextProvider,
	usePasswordGenerator
} from '@components/jpaddeo/hooks/usePasswordGenerator.jsx'
import Lock from './icons/Lock'

function InnerGenerator() {
	const { generatedPassword, strength } = usePasswordGenerator()

	return (
		<section className='flex flex-col items-center justify-center gap-4 bg-gray-500 max-w-sm md:max-w-lg mx-auto p-6 mt-6 rounded-lg shadow-md shadow-gray-200 font-mono bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900'>
			<div className='flex items-center justify-center gap-2 text-white text-2xl uppercase mt-2'>
				<Lock className='w-5 h-5 animate-pulse' />
				<h1>Password Generator</h1>
				<Lock className='w-5 h-5 animate-pulse' />
			</div>
			<div className='flex items-center justify-center gap-2'>
				<PasswordCard password={generatedPassword} />
				<Actions />
			</div>
			<span
				className={`text-sm font-bold ${
					strength === 'strong' ? 'text-green-600' : strength === 'medium' ? 'text-yellow-600' : ''
				}`}
			>
				{strength}
			</span>
			<GeneratorOptions />
			<footer className='text-sm text-white'>
				<span>
					Developed with 💙 by {' '}
					<a
						href='https://github.com/jpaddeo'
						className='border-b-2 border-dotted  border-white hover:border-gray-500'
					>
						jpaddeo
					</a>
				</span>
			</footer>
		</section>
	)
}

export default function Generator() {
	return (
		<PasswordGeneratorContextProvider>
			<InnerGenerator />
		</PasswordGeneratorContextProvider>
	)
}
