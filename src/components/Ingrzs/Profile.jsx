import React from 'react'

function Profile() {
	return (
		<div className='flex flex-col items-center  font-bold'>
			<h2>Desarrollado by Ingrzs</h2>
			<a href='https://github.com/Ingrzs' target='_blank'>
				<img
					src='https://cdn-icons-png.flaticon.com/128/3291/3291695.png'
					alt='perfil'
					className='w-10 h-10'
				/>
			</a>
		</div>
	)
}
export default Profile
