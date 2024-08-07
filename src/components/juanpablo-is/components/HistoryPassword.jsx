import { useEffect, useState } from 'react'
import Drawer from './common/Drawer'
import IconChevronsDown from './common/icons/IconChevronsDown'

const HistoryPassword = () => {
	const [showDrawer, setShowDrawer] = useState(false)
	const [passwords, setPasswords] = useState([])

	useEffect(() => {
		const passwords = JSON.parse(window.sessionStorage.getItem('password-generated') || '[]')
		setPasswords(passwords.sort(({ date: dateA }, { date: dateB }) => dateB - dateA).slice(0, 5))
	}, [showDrawer])

	const hashPassword = (password) => {
		return (password.length > 5 ? '*'.repeat(password.length - 5) : '') + password.substr(-5)
	}

	const handlerShowDrawer = () => {
		setShowDrawer((prev) => !prev)
	}

	const handlerCopyPassword = (password) => {
		navigator.clipboard.writeText(password)
	}

	return (
		<>
			<div
				className='flex flex-col items-center py-2 text-white cursor-pointer'
				onClick={handlerShowDrawer}
			>
				<IconChevronsDown />
				<p className='font-bold capitalize'>Show history password</p>
			</div>

			{showDrawer && (
				<Drawer title='History password generated' onClose={() => setShowDrawer(false)}>
					<div className='overflow-x-auto max-h-[40vh]'>
						{passwords.length > 0 ? (
							<table className='w-full text-sm relative shadow-md sm:rounded-lg text-left text-gray-500 dark:text-gray-400'>
								<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
									<tr>
										<th scope='col' className='py-3 px-6'>
											Password
										</th>
										<th scope='col' className='py-3 px-6 text-center'>
											Date
										</th>
										<th scope='col' className='py-3 px-6 text-end'>
											Copy password
										</th>
									</tr>
								</thead>
								<tbody>
									{passwords.map(({ password, date }) => (
										<tr
											key={password}
											className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
										>
											<th
												scope='row'
												className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'
											>
												{hashPassword(password)}
											</th>
											<td className='py-4 px-6 text-center'>{new Date(date).toLocaleString()}</td>
											<td className='py-4 px-6 text-right'>
												<button
													className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
													onClick={() => handlerCopyPassword(password)}
												>
													Copy
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p className='font-bold capitalize'>Not password generated...</p>
						)}
					</div>
				</Drawer>
			)}
		</>
	)
}

export default HistoryPassword
