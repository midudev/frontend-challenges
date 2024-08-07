
const PasswordValues = (props) => {

	const {value, 
		   setValue, 
		   abc, 
		   setAbc, 
		   numbers, 
		   setNumbers, 
		   special, 
		   setSpecial} = props;

	const changeCheckboxes = (type, data) => {
		if(type === 'abc'){
			if(!numbers && !special){
				return;
			}
			setAbc(data);
		}

		if(type === 'numbers'){
			if(!abc && !special){
				return;
			}
			setNumbers(data);
		}

		if(type === 'special'){
			if(!numbers && !abc){
				return;
			}
			setSpecial(data);
		}
		
	}

	return(
		<div className="paula2208-PasswordValuesContainer">

			<div className="paula2208-Checkboxes">
				<input type="checkbox" 
					   className="paula2208-Checkbox"
					   checked={abc}
					   onChange={(e) => changeCheckboxes('abc', e.target.checked)}
				/>
				<label>
					AaBbCc
				</label>
			</div>
			
			<div className="paula2208-Checkboxes">
				<input type="checkbox" 
					   className="paula2208-Checkbox"
					   checked={numbers}
					   onChange={(e) => changeCheckboxes('numbers', e.target.checked)}
				/>
				<label>
					123456
				</label>
			</div>

			<div className="paula2208-Checkboxes">
				<input type="checkbox" 
					   className="paula2208-Checkbox"
					   checked={special}
					   onChange={(e) => changeCheckboxes('special', e.target.checked)}
				/>
				<label>
					* _ / % @
				</label>
			</div>
			<div className="paula2208-rangeComplete">
				<label>
					{value}
				</label>
				<input type="range" 
					min="1" 
					max="15" 
					steps="15"
					value={value}
					className="paula2208-Range"
					onChange={(e) => setValue(e.target.value)}
				/>
			</div>
			
		</div>
	)
}

export default PasswordValues;