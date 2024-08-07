const FormLayout = ({ children }) => {
	return (
		<section className='z-0 relative w-full min-h-min sm:w-96 bg-black rounded p-4 mt-4'>
			<div className='flex flex-col justify-center items-center w-full h-full bg-black border border-white rounded p-1'>
				{children}
			</div>
		</section>
	)
}

export default FormLayout
