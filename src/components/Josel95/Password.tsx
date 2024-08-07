import { FC, useState } from 'react'

import { CopyIcon } from './icons/CopyIcon'
import { CheckIcon } from './icons/CheckIcon'

interface PasswordProps {
	value: string
	blurred?: boolean
}

export const Password: FC<PasswordProps> = ({
	value,
	blurred = false
}) => {
	const [showCheckIcon, setShowCheckIcon] = useState(false)

	const classes = [
		'josel95-input-icon',
		blurred ? 'josel95-blurred' : ''
	]

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(value)
		setShowCheckIcon(true)
		setTimeout(() => {
			setShowCheckIcon(false)
		}, 1000)
	}

	return (
		<div className={classes.join(' ')}>
			<input
				className='josel95-input'
				type='text'
				value={value}
				readOnly
				placeholder='Generate a new password' />
			<button className='josel95-input-button' disabled={blurred} onClick={handleCopyToClipboard}>
				{
					showCheckIcon
						? <CheckIcon />
						: <CopyIcon />
				}
			</button>
		</div>
	)
}