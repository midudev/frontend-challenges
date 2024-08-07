import { useState } from 'react';
import { generatePassword } from './helpers/generatePassword';
import './styles.css';

const GeneratePassword = () => {

	const [range, setRange] = useState(6);
	const [newPassword, setNewPassword] = useState();

	const handleInputvalue = (event) => {
		setRange(event.target.value);
	}
	const buttonGenerator = () => {
		const pass = generatePassword(range);
		setNewPassword(pass);
	}
	const handleCopyPassword = () => {
		navigator.clipboard.writeText(newPassword);
	}

	return (
		<div className='DanielSilvaF_container'>
			<h1 className='DanielSilvaF_H1'><strong>Generador de Contraseñas</strong></h1>
			<hr />
			<div className='DanielSilvaF_range'>{range}</div>
			<input
				type="range"
				min="6" max="20"
				value={range}
				onChange={handleInputvalue}
				className='DanielSilvaF_input'
			/>

			<button
				className='DanielSilvaF_button'
				onClick={buttonGenerator}
			>
				Generar Contraseña
			</button>

			<div className='DanielSilvaF_DivOptions'>
				<div className='DanielSilvaF_result'>{newPassword}
				</div>
				<button
					className='DanielSilvaF_buttonCopy'
					onClick={handleCopyPassword}
				>Copiar</button>
			</div>
		</div >
	)
}

export default GeneratePassword;
