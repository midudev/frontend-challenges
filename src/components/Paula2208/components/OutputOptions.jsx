import { useState, useEffect} from "react";

const OutputOptions = (props) => {

	const {password} = props;
	const [inputType, setInputType] = useState('password');
	const [copied, setCopied] = useState(false);

	const changeVision = () => {
		if(inputType === 'password'){
			setInputType('text');
		}
		else{
			setInputType('password');
		}
	}

	const copy = () => {
		if(password === ''){
			return;
		}
		
		navigator.clipboard.writeText(password)
			.then(() => setCopied(true));
	}

	useEffect(() => {
		setCopied(false);
	}, [password])

	return(
		<div className="paula2208-OutputOptionsContainer-label">
			<div className="paula2208-OutputOptionsContainer">
				<input type={inputType} value={password} className="paula2208-Password"/>
				<button className="paula2208-pointer"
						onClick={() => copy()}
				>
					Copy
				</button>
				<button className="paula2208-pointer"
						onClick={() => changeVision()}
				>
					{(inputType === 'password') ? 'See' : 'Hide'}
				</button>
			</div>
			{(copied) && (<label>Copied to clipboard!</label>)}
		</div>
	)
}

export default OutputOptions;