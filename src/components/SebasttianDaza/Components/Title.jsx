const Title = ({ title, ...args }) => {
	return (
		<>
			<section>
				<h1 {...args}>{title}</h1>
			</section>
		</>
	)
}

export default Title
