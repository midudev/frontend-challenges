const Button = ({ click }) => {
	return (
		<button
			className='ease-in-out duration-300 bg-transparent border-2 w-60 font-mono text-sm m-2 py-1 rounded-sm text-purple-900 border-purple-900 hover:bg-purple-900 hover:text-pink-200'
			onClick={click}
		>
			GENERETE <span className='text-xs'>🡪</span>
		</button>
	)
}

export default Button
