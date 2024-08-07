const Button = ({ handleClick, message }) => {
	return (
		<button
			className='w-36 h-10 bg-black text-white text-sm italic font-thin shadow hover:bg-[#b4ff39] hover:text-black hover:-translate-y-1 transition-all duration-300 rounded border border-white mr-4'
			onClick={handleClick}
		>
			{message}
		</button>
	)
}

export default Button
