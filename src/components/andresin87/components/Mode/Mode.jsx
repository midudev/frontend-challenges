import { Fragment } from 'react'

import useMode from './useMode.js'

const Mode = ({ children, target, ...props }) => {
	const { Tokens } = useMode({ target, ...props })
	return (
		<Fragment>
			<Tokens id='mode' className='mode' />
			{children}
		</Fragment>
	)
}

export default Mode
