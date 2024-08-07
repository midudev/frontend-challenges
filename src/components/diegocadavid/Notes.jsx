import React from 'react'

const Notes = () => {
	return (
		<div className='bg-amber-100 text-slate-600 p-3 flex flex-col gap-3'>
			<p className='font-bold text-slate-500'>Admin 3/9/2022</p>
			<p> <span className='line-through'> Recuerda participar en la hacktoberfest-2022. </span> ✅</p>
			<p>Recuerda generar la contraseña asignada por el jefe.</p>
			<p className='font-bold'>Puedes generar la contraseña en el programa "Generator" que esta en desarrollo.</p>
			<p>Cierra esta pestaña con el icono "🔴"</p>
		</div>
	)
}

export default Notes
