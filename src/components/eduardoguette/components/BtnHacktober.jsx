export const BtnHacktober = ({ handleEnvent, text, classStyle = 'text-md' }) => {
	const newLocal = `w-full rounded-md flex justify-center items-center btn-clip-eduardoguette text-md my-auto focus:outline-none bg-gradient-to-r from-[rgb(255,215,77)] via-[rgb(64,221,255)] to-[rgb(124,127,255)] md:hover:bg-gradient-to-r active:bg-gradient-to-r  tracking-widest drop-shadow-eduardoguette p-3 text-black md:hover:rotate-3 active:rotate-3 transition-all relative group select-none ${classStyle}`
	return (
		<button
			onClick={handleEnvent}
			role='button'
			className={newLocal}
		>
			{text}
			<div className='clip-btn-eduardoguette opacity-10 group-active:opacity-10 md:group-hover:opacity-100 left-0 md:group-hover:left-12 md:group-active:left-12 transition-all duration-700 h-16 w-20 absolute bg-gradient-to-l to-[rgb(255,215,77,.1)] from-[#ffffff5e] drop-shadow' />
		</button>
	)
}
