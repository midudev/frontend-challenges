export default function InputCheck({ level, checked, option, setOption }) {
	function handleChange(e) {
		const { value, checked } = e.target
		if (value === 'words') {
			const obj = { ...option }
			obj.number = false
			obj.symbol = false
			obj[value] = checked
			const checkedState = document.querySelectorAll('.inputcheck-hugok2k')
			checkedState[0].checked = false
			checkedState[1].checked = false
			return setOption(obj)
		}
		if (checked) {
			const obj = { ...option }
			obj[value] = checked
			obj.words = false
			const checkedState = document.querySelectorAll('.inputcheck-hugok2k')
			checkedState[2].checked = false
			setOption(obj)
		} else {
			const obj = { ...option }
			obj[value] = checked
			setOption(obj)
		}
	}

	return (
		<div className='containercheck-hugok2k'>
			<span>{level}</span>
			<input
				type='checkbox'
				className='inputcheck-hugok2k'
				value={checked}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	)
}
