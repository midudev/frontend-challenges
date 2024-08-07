import './style/button.css'

export const ButtonCopy = ({ password }) => {
	function handlerCopy() {
		navigator.clipboard.writeText(password)
		const copiedComponent = window.document.getElementById('eyubkh-copied')
		copiedComponent.style.top = '30px'
		setTimeout(() => {
			copiedComponent.style.top = '-50px'
		}, 1200)
	}

	return (
		<div id='eyubkh-button' onClick={handlerCopy}>
			<svg xmlns='http://www.w3.org/2000/svg' width='20px' fill='white' viewBox='0 0 512 512'>
				<path d='M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z' />
			</svg>
		</div>
	)
}
