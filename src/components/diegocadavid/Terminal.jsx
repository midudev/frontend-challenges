import React from 'react'
import InputTerminal from './InputTerminal'

const Terminal = ({ addCommand, commands }) => {
	return (
		<div className='text-slate-100 text-base  p-4 h-[calc(100%-56px)] overflow-y-auto relative'>
			<div>
				<p>Terminal Password [Version 9.22.2006]</p>
				<p>
					Creado por {' '}
					<a
						href='https://diegocadavid-client-production.up.railway.app/'
						target='_blank'
						className='underline'
					>
						DiegoCadavid
					</a>
				</p>
				<p>Usa el comando 'help' para ver todos los comandos.</p>
			</div>
			<br />

			{commands.map((e) => {
				return e
			})}
			<InputTerminal addCommand={addCommand} />
		</div>
	)
}

export default Terminal
