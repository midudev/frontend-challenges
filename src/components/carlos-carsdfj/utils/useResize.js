import { useEffect, useState } from 'react'

const useResize = () => {
	const [width, setWidth] = useState(0)

	useEffect(() => {
		const updateWidth = () => {
			const width = document.body.clientWidth

			setWidth(width)
		}

		updateWidth()

		window.addEventListener('resize', updateWidth)

		return () => {
			window.removeEventListener('resize', updateWidth)
		}
	}, [])

	return { width }
}

export default useResize
