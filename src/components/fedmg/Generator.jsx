import React from 'react'
import './styles/main.css'
import { Form } from './components/Form.jsx'

const PasswordGenerator = () => {
	return (
		<main className='fedmg-main'>
			<section className='section'>
				<h2 className='title'>Password generator</h2>
				<Form />
			</section>
		</main>
	)
}

export default PasswordGenerator
