import React, { useState } from 'react'
import PasswordGenerator from './PasswordGenerator'
import SliderRange from './SliderRange'

const App = () => {
	const [value, setValue] = useState(6)
	return (
		<>
			<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<PasswordGenerator value={value}/>
				<SliderRange value={value} setValue={setValue}/>
			</div>
		</>
	)
}

export default App