import './Button.css'
const Button = ({ type = 'default', children, onClick, disabled }) => {
	return (
		<div id='rafa-lozano'>
			<button className={disabled ? 'disabled' : type} onClick={onClick} disabled={disabled}>
				{children}
			</button>
		</div>
	)
}

export default Button
