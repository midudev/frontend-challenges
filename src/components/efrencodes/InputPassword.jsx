import Copy from './icons/Copy'
import Refresh from './icons/Refresh'

const InputPassword = ({ password, handleRefreshPassword, handleCopyText }) => {
	return (
		<div className='w-full h-auto max-h-32 flex items-center justify-between border-pink-500 border-2 rounded p-2.5 my-6'>
			<p className='text-xl font-medium tracking-wide leading-6 break-all font-mono'>{password}</p>
			<div className='w-16 flex items-center'>
				<button className='mr-1.5 ml-1.5' onClick={handleCopyText} title='Copiar password'>
					<Copy />
				</button>
				<button className='mr-1.5' onClick={handleRefreshPassword} title='Generar otra password'>
					<Refresh />
				</button>
			</div>
		</div>
	)
}

export default InputPassword
