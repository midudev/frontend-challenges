const Banner = ({ show, message }) => {
	return (
		<section
			style={{ opacity: show ? 1 : 0 }}
			className='z-40 absolute top-0 m-auto w-52 h-24 bg-black/50 backdrop-blur-sm p-4 rounded text-white shadow-md shadow-zinc-800 transition-all duration-300'
		>
			<section className='w-full h-full flex justify-center items-center font-thin italic bg-black border border-white rounded'>
				{message}
			</section>
		</section>
	)
}

export default Banner
