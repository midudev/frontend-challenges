import { usePassword } from '../../hooks/sergio-jc'
import { Input, SelectCharacters } from './components'

const App = () => {
	const { input, number, handleCharacters, handlePassword } = usePassword()

	return (
		<div className='flex flex-col justify-center items-center gap-4'>
			<h1 className='font-mono text-purple-500'>Password Generator</h1>
			<Input value={input} />
			<SelectCharacters value={number} change={handleCharacters} click={handlePassword} />
			<h1 className='ease-in-out duration-300  font-mono text-purple-500 hover:text-pink-200 cursor-pointer'>
				<a href='https://www.linkedin.com/in/ronaldo-jara' target={'_blank'}>
					{'by Ronaldo Jara (sergio-jc)'}
				</a>
			</h1>
		</div>
	)
}

export default App
