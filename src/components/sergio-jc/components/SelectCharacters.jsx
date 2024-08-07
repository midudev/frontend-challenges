import Button from './Button'
import InputRange from './InputRange'

const SelectCharacters = ({ value, change, click }) => {
	return (
		<div className='flex flex-col justify-center items-center gap-4 bg-pink-200 w-72 rounded-sm p-3'>
			<InputRange value={value} change={change} />
			<Button click={click} />
		</div>
	)
}

export default SelectCharacters
