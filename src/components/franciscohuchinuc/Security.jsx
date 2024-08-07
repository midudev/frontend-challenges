
export const Security = ({ length }) => {
	if (length <= 8) {
		return (
			<div className='flex gap-2 items-center '>
				<p className='text-xs md:text-sm text-red-400'>Insecure</p>
			</div>
		)
	}

	if (length > 8 && length <= 14) {
		return (
			<div className='flex gap-2 items-center '>
				<p className='text-xs md:text-sm text-spark'>Secure enough</p>
			</div>
		)
	}

	if (length > 14) {
		return (
			<div className='flex gap-2 items-center '>
				<p className='text-xs md:text-sm text-green-400'>Extremely secure</p>
			</div>
		)
	}

	return <></>
}
