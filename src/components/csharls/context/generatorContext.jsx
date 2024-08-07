import React, { useState } from 'react'

const Context = React.createContext({})

export function GeneratorContextProvider({ children }) {
	const [length, setLength] = useState(8)
	const [password, setPassword] = useState('')
	return (
		<Context.Provider value={{ length, setLength, password, setPassword }}>
			{children}
		</Context.Provider>
	)
}
export default Context
