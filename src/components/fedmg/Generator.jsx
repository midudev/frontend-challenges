import React from 'react'
import './styles/main.css'
import { Form } from './components/Form.jsx'

const PasswordGenerator = () => {
	return (
		<main className='fedmg-main'>
			<section className='fedmg-section'>
				<h2 className='fedmg-title'>Password generator</h2>
				<Form />
			</section>
		</main>
	)
}

export default PasswordGenerator
