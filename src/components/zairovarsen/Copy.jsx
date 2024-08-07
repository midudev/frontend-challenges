import copy from './images/copy-two-paper-sheets-interface-symbol.png'

export default function Copy({ onClick }) {
	return <img className='img-style' onClick={onClick} src={copy.src} alt='Copy' />
}
