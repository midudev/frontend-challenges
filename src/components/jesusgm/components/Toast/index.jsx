import './styles.css'

export const Toast = ({ visible = false, msg = '' }) => (
	<div className={`toast ${visible ? 'visible' : 'hidden'}`}>
		<div>{msg}</div>
	</div>
)
