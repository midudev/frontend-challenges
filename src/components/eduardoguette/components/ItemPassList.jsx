import { useContext } from 'react'
import { AppContext } from '../context'
import { ButtonTimes } from './ButtonTimes'
export const ItemPassList = ({ id, url, username, password }) => {
	const icoUrl = 'https://' + url.split('://').pop().split('/').shift() + '/favicon.ico'
	const { state: { savedPasswords }, setState } = useContext(AppContext)
	const onDeleteElement = (id) => {
		const newPasswords = savedPasswords.filter((pass) => pass.id !== id)
		setState(p => ({ ...p, savedPasswords: newPasswords }))
		localStorage.setItem('savedPasswords', JSON.stringify(newPasswords))
	}
	return (
		<li
			key={id}
			className='relative flex items-center flex-1 bg-[rgb(63,61,77)] text-xs gap-4 p-3 rounded-md group'
		>
			<img
				src={icoUrl}
				alt={'Fav icon'}
				height={30}
				width={30}
				onError={(e) => {
					e.target.src = 'https://i.imgur.com/C1eyYxI.png'
					e.onerror = null
				}}
				className='text-xs whitespace-nowrap text-ellipsis rounded-md block bg-gray-100'
			/>
			<div className='flex-col flex gap-1'>
				<p className='w-[200px] md:w-[300px] overflow-hidden whitespace-nowrap text-ellipsis'>
					<a href={url} target='_blank' rel='noopener noreferrer'>{url}</a>
				</p>
				<p>Username: {username}</p>
				<p>Password: {password}</p>
			</div>
			<ButtonTimes onClickEvent={onDeleteElement} params={id} classStyle='md:hidden grid group-hover:grid -right-4 -top-4 md:right-6 md:top-6 md:hover:bg-[rgb(36,35,44)] bg-[rgb(36,35,44)]'/>
		</li>
	)
}
