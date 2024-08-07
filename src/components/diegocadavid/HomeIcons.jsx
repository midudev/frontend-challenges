import React from 'react'
import HomeIconsItem from './HomeIconsItem'

const HomeIcons = ({ handleOpenWindow }) => {
	return (
		<div className='p-8 flex flex-col gap-2 items-start'>
			<HomeIconsItem  path='/diegocadavid/papeleraIcon.png' name='Papelera'/>
			<HomeIconsItem  handleOpenWindow={handleOpenWindow('terminal')} path='/diegocadavid/terminalIcon.png' name='Terminal' />
			<HomeIconsItem  handleOpenWindow={handleOpenWindow('cli')} path='/diegocadavid/cliIcon.png' name='Generator'/>
			<HomeIconsItem  handleOpenWindow={handleOpenWindow('notes')} path='/diegocadavid/notesIcon.png' name='Notas'/>
		</div>
	)
}

export default HomeIcons
