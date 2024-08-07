import { FC } from 'react'

interface Props {
	textButton: string,
	onClick: () => void;
}

export const ButtonComponent:FC<Props> = ({ textButton, onClick }) => {
	return (
		<button
			className='uppercase py-3 px-5 bg-blue-800 rounded-3xl text-white font-bold mt-4 outline-none hover:bg-blue-700 transition-colors'
			onClick={onClick}
		>
			{textButton}
		</button>
	)
}
