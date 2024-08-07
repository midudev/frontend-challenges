import PasswordDisplay from '../PasswordDisplay'
import Controls from '../Controls'
import { GeneratorContextProvider } from '../context/generatorContext'
import './generator.css'

export default function Generator() {
	return (
		<>
			<div className='border rounded-md border-yellow-400 p-10 shadow-md shadow-lg csharls-card shadow-indigo-500/50 text-slate-200'>
				<GeneratorContextProvider>
					<Controls />
					<PasswordDisplay />
				</GeneratorContextProvider>
			</div>
		</>
	)
}
