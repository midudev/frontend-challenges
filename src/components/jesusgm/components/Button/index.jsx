import './styles.css'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const Button = ({ children, type = 'button', onClick = () => {}, className = '' }) => {
	return (
		<button className={`btn special ${className}`} type={type} onClick={onClick}>
			{children}
		</button>
	)
}
