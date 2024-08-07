const Container = ({ children }) => {
	return (
		<div className='md:container md:mx-auto h-full flex flex-col items-center justify-evenly'>
			{children}
		</div>
	)
}

export default Container
