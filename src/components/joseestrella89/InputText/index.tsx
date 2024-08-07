import React from 'react'

interface Props {
	action?: () => void
	actionText?: string
	hasAction?: boolean
	placeholder?: string
	showAnimation?: boolean
	value: string
}

const InputText = ({
	action,
	actionText,
	hasAction = false,
	placeholder,
	showAnimation = false,
	value
}: Props) => {
	return (
		<div
			className={`
			flex flex-direction-row my-4
			${showAnimation ? 'animate-bounce' : ''}
		`}
		>
			<input
				type='text'
				readOnly
				value={value}
				placeholder={placeholder}
				className='shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
			/>

			{hasAction && (
				<input
					type='submit'
					value={actionText}
					onClick={action}
					className='bg-slate-400 hover:bg-slate-500 text-white font-bold cursor-pointer py-2 px-4 rounded-r focus:outline-none focus:shadow-outline'
				/>
			)}
		</div>
	)
}

export default InputText
