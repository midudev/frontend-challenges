import { ChangeEvent, FC } from 'react'
import { useClipboard } from '@hooks/cmglezpdev'
import { CopiedSVG, CopySVG } from '../icons'

interface Props {
	value: string;
	name: string;
	placeholder: string;
	onChange: (e?:ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent:FC<Props> = ({ name, value, placeholder, onChange }) => {
	const { refElement, copied, copyText } = useClipboard()

	return (
		<div className='flex gap-2 my-2 justify-center w-full'>
			<input
				ref={refElement}
				type='text'
				name={name}
				value={value}
				placeholder={placeholder}
				className='py-1 px-2 rounded w-8/12 outline-none text-gray-600 text-xl'
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				onChange={onChange}
			/>
			<button
				className='flex items-center gap-1 px-2 bg-gray-400 rounded outline-none'
				onClick={() => copyText()}
			>
				{ (!copied) ? <CopySVG /> : <CopiedSVG /> }
				<span
					className='uppercase text-xs font-bold'
					style={{ color: copied ? '#19770d' : '#000' }}
				>Copy</span>
			</button>
		</div>
	)
}
