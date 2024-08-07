import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Wrapper: FC<Props> = function({
	children
}) {
	return (
		<div
			className='fixed inset-0 flex justify-center items-center bg-gradient-to-r from-blue-500 to-blue-600'
		>
			<div className='w-full max-h-screen overflow-y-auto px-4 py-8'>
				<div className='bg-[#0A0F31] max-w-xl mx-auto p-4 rounded-md text-lg text-white'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Wrapper