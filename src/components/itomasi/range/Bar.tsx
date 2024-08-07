import type { FC } from 'react'

interface Props {
  percentage: number
}

const Bar: FC<Props> = function({
	percentage
}) {
	return (
		<div
			className='h-full relative rounded-full flex items-center bg-gradient-to-r from-sky-400 to-blue-500'
			style={{
				width: `${percentage}%`
			}}
		>
			<div
				className='absolute w-6 h-6 -right-2 rounded-full bg-white hover:scale-[1.1] transition-all cursor-pointer'
			>
			</div>
		</div>
	)
}

export default Bar