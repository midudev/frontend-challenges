import { cloneElement, Children } from 'react'

import './styles.css'

const Icon = ({ as: As = 'i', className, fill, stroke, children, ...props }) => {
	return (
		<As className={['icon', className].join(' ')} style={{ fill, stroke }} {...props}>
			{cloneElement(Children.only(children), { className: 'svg' })}
		</As>
	)
}

Icon.displayName = 'Icon'

export default Icon
