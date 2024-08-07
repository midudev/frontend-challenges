import { useEffect, useState } from 'react'
import { generatePw } from './generatePassword'
import { Toast } from './components/Toast'
import { Button } from './components/Button'
import { Form } from './components/Form'

const PasswordItem = ({ password, onCopy }) => {
	return (
		<li className='prose w-full max-w-full'>
			<span className='text-white text-xl'>{password}</span>
			<Button
				onClick={() => onCopy(password)}
				className='flex gap-2 items-center ml-8 text-white text-xl'
			>
				Copy to clipboard <img className='w-8 m-0' src='/clipboard.svg' alt='Copy to clipboard' />
			</Button>
		</li>
	)
}

const PasswordGenerator = () => {
	const [passwords, setPassword] = useState([])
	const [toastVisible, setToastVisible] = useState(false)
	useEffect(() => {
		if (toastVisible) {
			setTimeout(() => {
				setToastVisible(false)
			}, 2000)
		}
	}, [toastVisible])

	const handleSubmit = (passwordLength) => {
		const newPassword = generatePw({ length: passwordLength })

		setPassword([newPassword, ...passwords.slice(0, 9)])
	}

	const handleCopy = (text) => {
		navigator.clipboard.writeText(text)
		setToastVisible(true)
	}

	return (
		<section id='jesusgm'>
			<Form onSubmit={handleSubmit} />
			<div className='rounded-md border p-4'>
				<h4 className='text-2xl mb-4 text-center'>Last {passwords.length} generated passwords</h4>
				<ul className='text-center  flex flex-col gap-2'>
					{passwords.map((password) => (
						<PasswordItem password={password} onCopy={handleCopy} />
					))}
				</ul>
			</div>
			<Toast visible={toastVisible} msg='Password copied to clipboard!' />
		</section>
	)
}

export default PasswordGenerator
