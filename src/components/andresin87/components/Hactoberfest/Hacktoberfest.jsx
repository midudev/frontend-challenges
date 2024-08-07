import Fragment from 'react'
import { icons } from '../../utils'
import { Icon } from '../index.js'

import './index.css'

const Hacktoberfest = ({ ...props }) => {
	return (
		<div className='hacktoberfest'>
			<a
				href='https://github.com/midudev/password-generator'
				target='_blank'
				rel='noopener noreferrer'
				className='hacktoberfest-icons-container'
			>
				<Icon className='h-mark'>{icons.iconHacktoberfestMark}</Icon>
				<div className='globe'>
					<Icon>{icons.iconHacktoberfestGlobe}</Icon>
					<div className='spinner-container'>
						<div className='spinner spinner-0' />
					</div>
					<div className='spinner-container'>
						<div className='spinner spinner-1' />
					</div>
				</div>
			</a>
		</div>
	)
}

export default Hacktoberfest
