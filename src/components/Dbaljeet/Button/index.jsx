import GeneratePassword from '../GeneratePassword'

const Button = ({ setValuePassword, filters }) => {
	return (
		<button
			onClick={(ev) => {
				ev.preventDefault()
				const password = GeneratePassword(filters)
				setValuePassword(password)
			}}
			className='font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 rounded-2xl'
		>
			Generate password
		</button>
	)
}

export default Button
