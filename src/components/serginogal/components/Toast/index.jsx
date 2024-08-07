import { forwardRef, useImperativeHandle, useState } from 'react'
import styles from './styles.module.css'

const SuccessIcon = () => {
	return (
		<div className={styles.successIconWrapper}>
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
				<path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
			</svg>
		</div>
	)
}

const Toast = forwardRef((_, ref) => {
	const [isDisplayed, setIsDisplayed] = useState(false)
	const [text, setText] = useState('Toast content')

	useImperativeHandle(ref, () => ({
		displayToast(text) {
			setText(text)
			setIsDisplayed(true)

			setTimeout(() => {
				setIsDisplayed(false)
			}, 1500)
		}
	}))

	return (
		<div className={`${styles.toastContainer} ${isDisplayed && styles.displayed}`} role='alert'>
			<SuccessIcon />
			<label>{text}</label>
		</div>
	)
})

export default Toast