
const Label = ({ children, htmlFor }) => {
	return (
		<label htmlFor={htmlFor} className='mr-3'>{children}</label>
	)
}

export default Label
