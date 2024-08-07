import type { FC } from 'react'

interface Props {
  className?: string,
  value: string
}

const Password: FC<Props> = function({
	className = '',
	value
}) {
	const handleOnClickCopy = async () => {
		if (!value) return

		try {
			await navigator.clipboard.writeText(value)

			alert('Copied to clipboard successfully!')
		} catch (e) {
			console.log(e)
			console.log('handleOnClickCopy() Error')
		}
	}

	return (
		<div className={`bg-[#1C2141] rounded-md flex items-center justify-between overflow-hidden ${className}`}>
			<span className='text-2xl px-4 truncate'>{value || 'Click in \'Generate Password\''}</span>

			<button
				className='min-w-[7rem] max-w-[7rem] py-4 bg-stone-900'
				type='button'
				onClick={handleOnClickCopy}
			>
        Copy
			</button>
		</div>
	)
}

export default Password