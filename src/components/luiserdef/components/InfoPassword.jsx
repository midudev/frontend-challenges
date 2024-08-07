function InfoPassword({ passwordStrengthData, isSliderActive }) {
	const infoBoxbackground = isSliderActive ? 'bg-[#339ab14f]' : 'bg-[#24b0da6b]'

	const paintStrengthLevels = () => {
		const paintLevels = []
		for (let i = 1; i <= 5; i++) {
			if (i <= passwordStrengthData.level) {
				paintLevels.push(<div key={i} className='w-4 h-4 rounded-full bg-[#bee4b9]' />)
			} else {
				paintLevels.push(
					<div key={i} className='w-4 h-4 rounded-full border-solid border-2 border-gray-200' />
				)
			}
		}
		return paintLevels
	}

	return (
		<div
			className={`${infoBoxbackground} luiserdef-info-pass mt-5 h-20 w-full max-w-[15em] overflow-hidden flex rounded-md`}
		>
			<div className='mr-increible flex relative bg-cyan-600 h-20 w-20'>
				<img className='w-full' src={passwordStrengthData.img} />
			</div>
			<div className='flex flex-col mx-2 my-2 justify-center gap-1'>
				<p>Fuerza</p>
				<div className='flex gap-2'>{paintStrengthLevels().map((element) => element)}</div>
			</div>
		</div>
	)
}

export default InfoPassword
