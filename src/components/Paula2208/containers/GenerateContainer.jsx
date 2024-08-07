import { useState} from "react";

import GenerateOptions from '../components/GenerateOptions';
import OutputOptions from '../components/OutputOptions';
import PasswordValues from '../components/PasswordValues';

import {checkPassword} from '../helpers/passwordHelpers.js'

import '../styles/styles.css'

const GenerateContainer = () => {

	const [value, setValue] = useState(8);
	const [abc, setAbc] = useState(true);
	const [numbers, setNumbers] = useState(true);
	const [special, setSpecial] = useState(true);

	const [password, setPassword] = useState('');

	const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
	const nums= '0123456789';
	const spl = '!%*/-$@_';

	const generatePasswordRandom = () => {
		let pass = '';
		let base = '';

		if(abc){
			base= base+letters;
		}
		if(numbers){
			base= base+nums;
		}
		if(special){
			base= base+spl;
		}

		for (let i = 0; i < value; i++){
			pass = pass + base.charAt(Math.floor(Math.random() * base.length))
		}

		if(checkPassword(pass, abc, numbers, special, letters, nums, spl)){
			setPassword(pass);
		}
		else{
			generatePasswordRandom();
		}
	}

	return (
		<div className="paula2208-GenerateContainer">
			<div className="paula2208-GridContainer">
				<div className="paula2208-titleContainer">
					<h1>Password Generator</h1>
				</div>

				<div className="paula2208-left-line"></div>
				<PasswordValues 
					value={value}
					setValue={setValue}
					abc={abc}
					setAbc={setAbc}
					numbers={numbers}
					setNumbers={setNumbers}
					special={special}
					setSpecial={setSpecial}
				/>
				<div className="paula2208-buttonsContainer">
					<GenerateOptions 
						generatePasswordRandom={generatePasswordRandom}
					/>
					<OutputOptions 
						password={password}
					/>
				</div>
				
			</div>

		</div>
	)
}

export default GenerateContainer;