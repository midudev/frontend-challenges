import Copy from './Copy'

const Input = ({ value, change }) => {
	return (
		<div className='flex items-center justify-center gap-4 bg-pink-200 w-72 h-9 rounded-sm'>
			<input
				className='bg-transparent text-purple-900 font-mono font-semibold border-none outline-none rounded-sm text-xl'
				value={value}
				onChange={change}
				type={'text'}
				readOnly
			/>
			<Copy value={value} />
		</div>
	)
}

export default Input
