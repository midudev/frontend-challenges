import React, { useState } from 'react'

const Login = ({ hiddenLogin }) => {
	const [loading, setLoading] = useState(false)

	const handleLogin = () => {
		setLoading(true)

		setTimeout(() => {
			hiddenLogin()
		}, 2000)
	}


	return (
		<div className='bg-zinc-900/90 backdrop-blur-md absolute inset-0 z-50 flex justify-center items-center'>
			<div className='flex flex-col items-center gap-12'>
				<div className='w-32 h-32 bg-slate-600 rounded-full flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						className='w-16 h-16 stroke-slate-300'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
						/>
					</svg>
				</div>
				{/* Boton para iniciar sesion */}
				<div className='flex lg:hidden'>
					<p className='text-slate-200 text-center'>
						Solo disponible en pc 😥
					</p>
				</div>

				<div className='hidden  lg:flex flex-col items-center gap-6'>
					{loading ? (
						<>
							<div className='rounded-full border-4 border-slate-700 border-t-slate-200 w-6 h-6 animate-spin'></div>
							<p className='text-slate-200'>Iniciando sesion...</p>
						</>
					) : (
						<>
						<div className='text-center'>
							<h2 className='text-slate-200 text-2xl'> ADMIN </h2>
							<p className='text-slate-200/50 text-sm'>Para una mejor experiencia <br /> active la pantalla completa [F11] ^^</p>
						</div>
							<button
								onClick={handleLogin}
								className='ring-1 ring-slate-100 p-2 text-slate-200 rounded-md hover:bg-slate-100/20 transition-colors ease-in '
							>
								{' '}
								Iniciar sesion
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Login
