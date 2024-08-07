import Clipboard from '@components/jpaddeo/icons/Clipboard.jsx'
import CheckCircle from '@components/jpaddeo/icons/CheckCircle.jsx'
import Refresh from '@components/jpaddeo/icons/Refresh.jsx'

import { usePasswordGenerator } from '@components/jpaddeo/hooks/usePasswordGenerator.jsx'

export default function Actions() {
	const { generatePassword, copied, copyPassword } = usePasswordGenerator()

	const handleRefresh = (e) => {
		generatePassword()
	}

	return (
		<div className='flex flex-col items-center justify-between text-white gap-2'>
			<button onClick={handleRefresh} title='Refresh'>
				<Refresh className='w-5 h-5 hover:animate-spin' />
			</button>
			<button onClick={copyPassword} disabled={copied} title='Copy'>
				{copied ? (
					<CheckCircle className='w-5 h-5 text-green-500' />
				) : (
					<Clipboard className='w-5 h-5' />
				)}
			</button>
		</div>
	)
}
