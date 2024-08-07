import useGenerator from '../hooks/useGenerator'
import './display.css'

export default function PasswordDisplay() {
	const { password } = useGenerator()

	return (
		<div className='flex flex-col md:flex-row justify-center mt-3'>
			<label className='text-white text-center'>Generated password:</label>
			<input
				className='text-black border border-white-500 rounded-full ml-2 px-3 csharls-glass'
				type='text'
				value={password}
				readOnly={true}
			/>
		</div>
	)
}
