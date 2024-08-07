
const GenerateOptions = (props) => {
	const {generatePasswordRandom} = props;

	return(
		<div className="paula2208-GenerateOptionsContainer">
			<button onClick={generatePasswordRandom}
					className="paula2208-btnGenerate paula2208-pointer"
			>
				Generate Password
			</button>
			{/*<button className="paula2208-information paula2208-pointer">
				!
			</button> lo haré después :'v*/}
		</div>
	)
}

export default GenerateOptions;