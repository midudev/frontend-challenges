import { clipBoard } from '@components/sergio-jc/func'
import { useState } from 'react'

const useCopy = (value) => {
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		clipBoard(value)
		setToggle(true)
		setTimeout(() => {
			setToggle(false)
		}, 1500)
	}

	return [toggle, handleToggle]
}

export default useCopy
