const CopySvg = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={48}
		height={48}
		viewBox='0 0 172 172'
		style={{
			fill: '#000'
		}}
		{...props}
	>
		<g
			fill='none'
			strokeMiterlimit={10}
			fontFamily='none'
			fontWeight='none'
			fontSize='none'
			textAnchor='none'
			style={{
				mixBlendMode: 'normal'
			}}
		>
			<path d='M0 172V0h172v172z' />
			<path
				d='M44.792 14.333c-8.89 0-16.125 7.235-16.125 16.125v111.084c0 8.89 7.234 16.125 16.125 16.125h82.416c8.89 0 16.125-7.235 16.125-16.125V71.667h-41.208C93.235 71.667 86 64.432 86 55.542V14.333zm51.958 3.15v38.059a5.382 5.382 0 0 0 5.375 5.375h38.059z'
				fill='#fff'
			/>
		</g>
	</svg>
)

const CopyButton = ({ value, setMessage }) => {
	const copyToClipboard = () => {
		if (!value) return setMessage('No Password')
		navigator.clipboard.writeText(value)
		setMessage('Copied Password 🚀')
	}

	return (
		<button
			onClick={copyToClipboard}
			className='border-none bg-transparent hover:-translate-y-1 transition-all duration-300'
		>
			<CopySvg className='w-7 h-7' />
		</button>
	)
}

export default CopyButton
