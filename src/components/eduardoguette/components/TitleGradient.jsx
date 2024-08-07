
export const TitleGradient = ({ title, classStyle }) => {
	return (
		<h1 className={`text-white font-mono  text-center font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-[rgb(255,215,77)] via-[rgb(64,221,255)] to-[rgb(124,127,255)] ${classStyle} ` }>
			{title}
		</h1>
	)
}
