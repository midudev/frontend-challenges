import { handleFn, icons } from '../../utils/index.js'
import { Icon, Toggle } from '../index.js'

import './index.css'

const Navbar = ({ mode, onChange }) => {
	const handleChange = (event, { value }) => {
		handleFn(onChange)(event, value)
	}
	return (
		<div className='navbar'>
			<div className='navbar-menu'>
				<a href='/' className='navbar-home'>
					<Icon>{icons.iconHome}</Icon>
				</a>
				<a href='/entry' className='navbar-home'>
					<Icon>{icons.iconUsers}</Icon>
				</a>
			</div>
			<Toggle
				nodes={[<Icon>{icons.iconSun}</Icon>, <Icon>{icons.iconMoon}</Icon>]}
				values={['light', 'dark']}
				value={mode}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Navbar
