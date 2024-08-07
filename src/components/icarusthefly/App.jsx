import { useState } from 'react';
import './App.css';

export default function App() {
	const [passwordLength, setPasswordLength] = useState(8);
	const [useNormalCharacters, setUseNormalCharacters] = useState(true);
	const [useNumbers, setUseNumbers] = useState(true);
	const [useSpecialCharacters, setUseSpecialCharacters] = useState(true);
	const [password, setPassword] = useState('');
	const [passwordCopied, setPasswordCopied] = useState(false);

	const normalCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const numbers = '1234567890';
	const specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[]\\^_{}|~';
	const generatePassword = () => {
		if (!useNormalCharacters && !useNumbers && !useSpecialCharacters) {
			return;
		}

		let charsToChoose = [];
		let resultPassword = '';
		if (useNormalCharacters) {
			charsToChoose.push(...normalCharacters.split(''));
		}
		if (useNumbers) {
			charsToChoose.push(...numbers.split(''));
		}
		if (useSpecialCharacters) {
			charsToChoose.push(...specialCharacters.split(''));
		}

		while (resultPassword.length < passwordLength) {
			const randomIndex = Math.floor(Math.random() * charsToChoose.length);
			resultPassword += charsToChoose[randomIndex];
		}
		setPassword(resultPassword);
	};
	const copyPassword = () => {
		navigator.clipboard.writeText(password).then(() => {
			setPasswordCopied(true);
		});
	};

	return (
		<div className="icarusthefly">
			<h2 className='title'>Password Generator</h2>
			<div className='container'>
				<div className='filters'>
					<label>Password Length: </label>
					<span className='sliderSpan'>
						<input type='range' min='4' max='24' value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
						<span id='passwordLength'>{passwordLength}</span>
					</span>
					<span className='checkboxSpan'>
						<input type='checkbox' className='myinput' defaultChecked onChange={() => setUseNormalCharacters(!useNormalCharacters)} />
					</span>
					<span>Add normal characters</span>
					<span className='checkboxSpan'>
						<input type='checkbox' defaultChecked onChange={() => setUseNumbers(!useNumbers)} />
					</span>
					<span>Add numbers</span>
					<span className='checkboxSpan'>
						<input type='checkbox' defaultChecked onChange={() => setUseSpecialCharacters(!useSpecialCharacters)} />
					</span>
					<span>Add special characters</span>
				</div>
				<div className='generator'>
					<button className='generateButton' disabled={!useNormalCharacters && !useNumbers && !useSpecialCharacters} onClick={generatePassword}>
						Generate password
					</button>
					<input className='showPassword' disabled value={password !== '' ? password : 'Please create a password...'} />
					<button className='copyButton' disabled={password === ''} onClick={copyPassword}>
						Copy
					</button>
				</div>
				<p className='passwordCopiedNotification' hidden={!passwordCopied}>
					Password copied to the clipboard!
				</p>
			</div>
		</div>
	);
}
