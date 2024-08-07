import React, { useState } from 'react'
import PasswordFilter from './PasswordFilter.jsx'
import PasswordResult from './PasswordResult.jsx'
import Alert from './Alert.jsx'
import passwordGenerator from '@components/israel-gs/helpers/passwordGenerator.ts'

export default function Main() {
	const [password, setPassword] = useState('...')
	const [filters, setFilters] = useState([])

	const [showAlert, setShowAlert] = useState(false)
	const [alertMessage, setAlertMessage] = useState('')
	const [alertType, setAlertType] = useState('success')

	const handleFilterChange = (filters) => {
		setFilters(filters)
		setPassword(passwordGenerator(...filters))
	}

	const handleRefresh = () => {
		setPassword(passwordGenerator(...filters))
	}

	const handleCopy = async () => {
		navigator.clipboard
			.writeText(password)
			.then(() => {
				setAlertMessage('Copiado al portapapeles')
				setShowAlert(true)
			})
			.catch(() => {
				setAlertType('error')
				setAlertMessage('No se pudo copiar al portapapeles')
				setShowAlert(true)
			})
	}

	return (
		<>
			<Alert type={alertType} message={alertMessage} show={showAlert} setShow={setShowAlert} />
			<PasswordResult onCopy={handleCopy} onRefresh={handleRefresh} password={password} />
			<PasswordFilter onChange={handleFilterChange} />
		</>
	)
}
