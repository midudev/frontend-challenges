import { CopyIcon } from '../atoms/CopyIcon'

export const PassBox = ({ generatedPassword = undefined }) => {
	return (
		<div className='p-2 w-full border flex border-slate-500'>
			<p className='w-full'>{generatedPassword}</p>
			<p><CopyIcon textToCopy={generatedPassword}/></p>
		</div>
	)
}