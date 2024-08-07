import React from 'react'

import RedoIcon from './redo'
import CopyIcon from './copy'
import CheckIcon from './check'
import ChevronLeftIcon from './chevronLeft'

const Icons = ({ type, callback, margin }) => {
	const icons = {
		redo: RedoIcon,
		copy: CopyIcon,
		check: CheckIcon,
		chevronLeft: ChevronLeftIcon
	}

	const Icon = icons[type]

	return (
		<span className={`${margin} cursor-pointer z-100 relative`} onClick={callback}>
			<Icon />
		</span>
	)
}

Icons.defaultProps = {
	type: 'redo',
	margin: 'mx-2'
}

export default Icons
