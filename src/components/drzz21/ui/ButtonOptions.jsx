import React from 'react'
import '../style.css'

const ButtonOptions = ({ config: { name, disable, onInputPass, configPassword } }) => {
	return (
		<button
			disabled={!disable && configPassword[name]}
			onClick={onInputPass}
			name={name}
			className={`text-xl lg:text-2xl font-medium  px-3 w-1/2   rounded bg-[#393E46] ${
				configPassword[name] ? 'drzz21text' : 'drzz21textDisabled'
			} drop-shadow-2xl`}
		>
			{name}
		</button>
	)
}
export default ButtonOptions
