import { useControlledState } from '../../../../hooks/andresin87/index.js'
import { handleFn } from '../../utils/index.js'

import './index.css'

const Toggle = ({
	id,
	className,
	values = [false, true],
	nodes = [null, null],
	value,
	isDisabled,
	defaultValue,
	onChange
}) => {
	const [innerValue, setInnerValue] = useControlledState(
		values.includes(value) ? value : undefined,
		values.includes(defaultValue) ? defaultValue : values[0]
	)
	const handleChange = (event) => {
		setInnerValue(innerValue === values[0] ? values[1] : values[0])
		handleFn(onChange)(event, { value: innerValue })
	}
	return (
		<button
			role='checkbox'
			id={id}
			className={['toggle', className].filter(Boolean).join(' ')}
			aria-checked={value === values[1]}
			type='button'
			onClick={handleChange}
			data-state={value === values[1] ? values[1] : values[0]}
			disabled={isDisabled}
		>
			<div className='toggle-container'>
				<span className='toggle-button' />
				<div className='toggle-nodes'>
					<span className='toggle-node toggle-node--prefix'>{nodes[0]}</span>
					<span className='toggle-node toggle-node-suffix'>{nodes[1]}</span>
				</div>
			</div>
			{/* <input type='checkbox' value={`${values[0]}`} checked={innerValue === values[0]} /> */}

			{/* <input type='checkbox' value={`${values[1]}`} checked={innerValue === values[1]} /> */}
		</button>
	)
}

export default Toggle
