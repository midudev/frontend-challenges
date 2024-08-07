import './style/password.css'

export const Password = ({ children: password }) => {
	return (
		<div id='eyubkh-password'>
			<div id='eyubkh-password-cone-left-top' className='eyubkh-password-cone' />
			<div id='eyubkh-password-cone-left-bottom' className='eyubkh-password-cone' />
			<div id='eyubkh-password-cone-right-top' className='eyubkh-password-cone' />
			<div id='eyubkh-password-cone-right-bottom' className='eyubkh-password-cone' />
			<div id='eyubkh-password-text'>{password}</div>
		</div>
	)
}
