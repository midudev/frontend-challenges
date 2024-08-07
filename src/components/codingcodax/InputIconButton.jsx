const InputIconButton = ({ children, onClick, isDisabled = false }) => {
	return (
		<button
			className={`p-1 w-8 h-8 rounded-md bg-zinc-700 border border-zinc-600 duration-200 hover:bg-zinc-600 active:scale-90 ${
				isDisabled ? 'disabled:opacity-50 disabled:pointer-events-none' : ''
			}`}
			onClick={onClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	)
}

export default InputIconButton
